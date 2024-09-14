'use client'
import React from 'react'
import PackageCard from '../_components/PackageCard'
import Link from 'next/link'

const categories = [
  {
    name: 'react',
    slug: 'react',
  },
  {
    name: 'next',
    slug: 'next',
  },
  {
    name: 'node',
    slug: 'node',
  },
  {
    name: 'boilerplate',
    slug: 'boilerplate',
  },
  {
    name: 'angular',
    slug: 'angular',
  },
  {
    name: 'express',
    slug: 'express',
  },
  {
    name: 'nest',
    slug: 'nest',
  },
  {
    name: 'mysql',
    slug: 'mysql',
  },
  {
    name: 'mongodb',
    slug: 'mongodb',
  },
  {
    name: 'postgresql',
    slug: 'postgresql',
  },
  {
    name: 'typescript',
    slug: 'typescript',
  },
  {
    name: 'graphql',
    slug: 'graphql',
  },
  {
    name: 'tslib',
    slug: 'tslib',
  },
  {
    name: 'animation',
    slug: 'animation',
  },
  {
    name: 'scroll',
    slug: 'scroll',
  },
  {
    name: 'slider',
    slug: 'slider',
  },
  {
    name: 'cli',
    slug: 'cli',
  },
  {
    name: 'aws',
    slug: 'aws',
  },
]

const HomePageComponent = () => {
  const [packages, setPackages] = React.useState([])
  const [keyword, setKeyword] = React.useState('')
  const fetchPackages = async () => {
    const response = await fetch(
      `https://registry.npmjs.com/-/v1/search?text=${keyword}&size=1000&sort=popularity`,
      {
        method: 'GET',
      }
    )
    const data = await response.json()
    setPackages(data.objects)
  }
  return (
    <>
      <div className="mt-12 max-md:px-6 w-full flex items-center gap-4 max-md:flex-col">
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
      {packages.length > 0 ? (
        <div className="mt-20 w-full max-md:px-6">
          <div className="w-full grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-4">
            {packages.map((item: any) => (
              <PackageCard
                key={item.package.name}
                name={item.package.name}
                version={item.package.version}
                description={item.package.description}
                date={item.package.date}
                github={item.package.links?.repository}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full flex items-center gap-6 flex-wrap mt-20 justify-center max-md:px-6">
          {categories.map((category, index) => (
            <Link href={`/category/${category.slug}`} key={index}>
              {category.name}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default HomePageComponent
