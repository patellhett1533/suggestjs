import React from 'react'

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <div className="w-full p-12">
        <div className="w-full flex items-center justify-between border-b border-border pb-4">
          <h1 className="text-4xl font-semibold">{params.slug}</h1>
          <div>
            <p>1.0.2 &nbsp;•&nbsp; 2 days ago &nbsp;•&nbsp; 267 downloads</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
