import PackageCard from '@/app/_components/PackageCard'
import React from 'react'

const getPackageScore = async (name: string) => {
  const response = await fetch(
    `https://registry.npmjs.com/-/v1/search?text=${name}&sort=popularity&size=5000`,
    {
      method: 'GET',
    }
  )
  const data = await response.json()
  return data
}

const page = async ({ params }: { params: { slug: string } }) => {
  const packagesData = await getPackageScore(params.slug)
  return (
    <div className="max-w-[1024px] mx-auto py-12">
      <div>
        <h1 className="text-2xl capitalize font-semibold">
          Packages for keyword: &ldquo;{params.slug}&rdquo;
        </h1>
      </div>
      <div className="w-full grid grid-cols-3 gap-8 mt-8">
        {packagesData.objects.map((item: any) => (
          <PackageCard
            key={item.package.name}
            name={item.package.name}
            version={item.package.version}
            description={item.package.description}
            date={item.package.date}
          />
        ))}
      </div>
    </div>
  )
}

export default page
