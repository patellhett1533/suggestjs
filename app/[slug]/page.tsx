import React from 'react'
import Image from 'next/image'

const getPackageData = async (name: string) => {
  const response = await fetch(`https://registry.npmjs.com/${name}`, {
    method: 'GET',
  })
  const data = await response.json()
  return data
}

const page = async ({ params }: { params: { slug: string } }) => {
  const packageData = await getPackageData(params.slug)

  if (!packageData) return <div></div>
  return (
    <div>
      <div className="w-full p-12">
        <div className="w-full flex items-center justify-between border-b border-border pb-4">
          <h1 className="text-4xl font-semibold">{params.slug}</h1>
          <div>
            <p>1.0.2 &nbsp;•&nbsp; 2 days ago &nbsp;•&nbsp; 267 downloads</p>
          </div>
        </div>
        <div className="w-full mt-8">
          <div className="w-3/4">
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
              <h3 className="text-xl font-semibold">Description</h3>
              <div
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: packageData.description }}
              ></div>
            </div>
          </div>
          <div className="w-1/4"></div>
        </div>
      </div>
    </div>
  )
}

export default page
