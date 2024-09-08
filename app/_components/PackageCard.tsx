import React from 'react'

interface Props {
  name: string
  version: string
  date: string
  size?: string
  downloads?: string
  description: string
}

const PackageCard = (props: Props) => {
  return (
    <div className="border border-border p-4 w-full">
      <h2 className="text-xl pb-6">{props.name}</h2>
      <div className="flex justify-between">
        <p className="text-sm">
          Published on {props.date.split('T')[0].replaceAll('-', '/')}
        </p>
        <p className="text-sm">267 downloads</p>
      </div>
      <div className="flex justify-between mt-2">
        <p className="text-sm">{props.version} version</p>
        <p className="text-sm">187.68 kB size</p>
      </div>
      <p className="text-sm mt-4">
        {props.description.substring(0, 50) + '...'}
      </p>
    </div>
  )
}

export default PackageCard
