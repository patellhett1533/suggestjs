import React from 'react'
import HomePageComponent from './_components/HomePageComponent'

export default function Home() {
  console.log(new Date())
  return (
    <>
      <div className="w-full flex flex-col justify-start items-center max-w-[1024px] mx-auto">
        <h1 className="md:text-4xl text-2xl mt-24 font-semibold max-md:text-center">
          Find perfact package for your project
        </h1>
        <HomePageComponent />
      </div>
    </>
  )
}
