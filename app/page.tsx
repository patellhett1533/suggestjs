'use client'
import React from 'react'
import PackageCard from './_components/PackageCard'

export default function Home() {
  const [packages, setPackages] = React.useState([])
  const [keyword, setKeyword] = React.useState('')
  const fetchPackages = async () => {
    const response = await fetch(
      `http://registry.npmjs.com/-/v1/search?text=${keyword}&size=20`,
      {
        method: 'GET',
      }
    )
    const data = await response.json()
    setPackages(data.objects)
  }
  return (
    <div>
      <div className="w-full flex flex-col justify-start items-center min-h-dvh max-w-[1024px] mx-auto py-24">
        <h1 className="text-4xl mt-24">
          Find perfact package for your project
        </h1>
        <div className="mt-12 w-full flex items-center gap-4">
          <input
            type="text"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search Keywords, eg. animation, pagination, slider, etc."
            className="w-full bg-transparent outline-none border border-border p-4"
          />
          <button
            className="bg-primary p-4 text-background"
            onClick={fetchPackages}
          >
            Search
          </button>
        </div>
        {packages.length > 0 && (
          <div className="mt-20 w-full">
            <div className="w-full grid grid-cols-3 gap-8">
              {packages.map((item: any) => (
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
        )}
      </div>
    </div>
  )
}
