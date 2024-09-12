import React from 'react'
import Image from 'next/image'
import matter from 'gray-matter'
import md from 'markdown-it'
import Link from 'next/link'
import PerformenceGraph from '../_components/PerformenceGraph'

const getPackageData = async (name: string) => {
  const response = await fetch(`https://registry.npmjs.com/${name}`, {
    method: 'GET',
  })
  const data = await response.json()
  return data
}

const getPackageScore = async (name: string) => {
  const response = await fetch(
    `https://registry.npmjs.com/-/v1/search?text=${name}&size=1`,
    {
      method: 'GET',
    }
  )
  const data = await response.json()
  return { score: data.objects[0].score, search: data.objects[0].searchScore }
}
const getDownloads = async (name: string, created: string) => {
  const response = await fetch(
    `https://api.npmjs.org/downloads/range/${created}:${new Date()}/${name}`,
    {
      method: 'GET',
    }
  )
  const data = await response.json()
  return data
}

const getDownloadsByDay = async (name: string) => {
  const response = await fetch(
    `https://api.npmjs.org/downloads/point/last-day/${name}`,
    {
      method: 'GET',
    }
  )
  const data = await response.json()
  return data
}

const getDownloadsByMonth = async (name: string) => {
  const response = await fetch(
    `https://api.npmjs.org/downloads/point/last-month/${name}`,
    {
      method: 'GET',
    }
  )
  const data = await response.json()
  return data
}

const getDownloadsByWeek = async (name: string) => {
  const response = await fetch(
    `https://api.npmjs.org/downloads/point/last-week/${name}`,
    {
      method: 'GET',
    }
  )
  const data = await response.json()
  return data
}

const page = async ({ params }: { params: { slug: string } }) => {
  params.slug = decodeURIComponent(params.slug)
  const packageData = await getPackageData(params.slug)
  const totalDownloads = await getDownloads(
    params.slug,
    packageData.time.created.split('T')[0]
  )
  const downloadsByDay = await getDownloadsByDay(params.slug)
  const downloadsByWeek = await getDownloadsByWeek(params.slug)
  const downloadsByMonth = await getDownloadsByMonth(params.slug)
  const packageScore = await getPackageScore(params.slug)

  if (!packageData) return <div></div>

  const readme = matter(packageData.readme)
  return (
    <div>
      <div className="w-full p-12 ">
        <div className="w-full flex items-center justify-between border-b border-border pb-4">
          <h1 className="text-4xl font-semibold">{params.slug}</h1>
          <div>
            <p>
              {packageData['dist-tags'].latest} &nbsp;•&nbsp;{' '}
              {packageData.time.modified.split('T')[0]}
              &nbsp;•&nbsp;{' '}
              {totalDownloads.downloads.reduce(
                (acc: number, item: any) => acc + item.downloads,
                0
              )}{' '}
              downloads
            </p>
          </div>
        </div>
        <div className="w-full mt-8 flex items-start gap-12">
          <div className="w-2/3">
            <div>
              <h3 className="text-xl font-semibold">Install</h3>
              <p className="border border-border p-4 w-fit mt-4 flex items-center gap-20">
                <span>npm i {params.slug}</span>
                <Image
                  src="/images/copy.svg"
                  alt="Optimize Image"
                  width={25}
                  height={25}
                  className="cursor-pointer"
                />
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold border-b border-border pb-4">
                Description
              </h3>
              <div
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: packageData.description }}
              ></div>
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-semibold border-b border-border pb-4">
                README File
              </h3>
              <div
                className="mt-4"
                dangerouslySetInnerHTML={{
                  __html: md().render(readme.content),
                }}
              ></div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="pb-4">
              <h3 className="text-xl font-semibold border-b border-border pb-4">
                Performence
              </h3>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="flex flex-col items-center gap-2">
                  <PerformenceGraph score={packageScore.score.detail.quality} />
                  <p>Quality</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PerformenceGraph
                    score={packageScore.score.detail.popularity}
                  />
                  <p>Popularity</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PerformenceGraph
                    score={packageScore.score.detail.maintenance}
                  />
                  <p>Maintenance</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-semibold border-b border-border pb-4">
                Download History
              </h3>
              <div className="mt-4 flex items-center justify-between">
                <p> Last Day : </p>
                <p>
                  <span className="font-semibold text-lg">
                    {downloadsByDay.downloads}
                  </span>{' '}
                  downloads
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p> Last Week : </p>
                <p>
                  <span className="font-semibold text-lg">
                    {downloadsByWeek.downloads}
                  </span>{' '}
                  downloads
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p> Last Month : </p>
                <p>
                  <span className="font-semibold text-lg">
                    {downloadsByMonth.downloads}
                  </span>{' '}
                  downloads
                </p>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-semibold border-b border-border pb-4">
                Keywords
              </h3>
              <div className="flex items-center flex-wrap gap-4 mt-8">
                {packageData.keywords &&
                  packageData.keywords.length > 0 &&
                  packageData.keywords.map((keyword: string, index: number) => (
                    <Link href="#" key={index}>
                      {keyword}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
