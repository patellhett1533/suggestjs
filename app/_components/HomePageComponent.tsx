'use client'
import React, { useEffect } from 'react'
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
  const [loading, setLoading] = React.useState(false)
  const fetchPackages = async () => {
    setLoading(true)
    const response = await fetch(
      `https://registry.npmjs.com/-/v1/search?text=${keyword}&size=1000&sort=popularity`,
      {
        method: 'GET',
      }
    )
    const data = await response.json()
    setPackages(data.objects)
    setLoading(false)
  }
  return (
    <>
      <div className="mt-12 max-md:px-6 w-full flex items-center gap-4 max-md:flex-col">
        <input
          type="text"
          defaultValue={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Keywords, eg. animation, pagination, slider, etc."
          className="w-full bg-transparent outline-none border border-border p-4"
          onKeyPress={(e) => e.key === 'Enter' && fetchPackages()}
        />
        <button
          className="bg-primary p-4 text-background"
          onClick={fetchPackages}
        >
          {loading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          ) : (
            <p>Search</p>
          )}
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
