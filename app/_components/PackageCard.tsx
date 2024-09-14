import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  name: string
  version: string
  date: string
  description?: string
  github?: string
}

const PackageCard = (props: Props) => {
  return (
    <div className="border border-border md:p-4 p-3 w-full">
      <Link
        href={`/${encodeURIComponent(`${props.name}`)}`}
        className="text-xl"
      >
        {props.name}
      </Link>
      <div className="flex justify-between pt-6">
        <p className="text-sm">
          {props.date.split('T')[0].replaceAll('-', '/')}
        </p>
        {props.github && (
          <Link href={props.github} target="_blank">
            <Image
              src="/images/github.svg"
              width={20}
              height={20}
              alt="github"
            />
          </Link>
        )}
      </div>
      <div className="flex justify-between mt-2">
        <p className="text-sm">{props.version} version</p>
      </div>
      <p className="text-sm mt-4">
        {props.description && props.description.substring(0, 50) + '...'}
      </p>
    </div>
  )
}

export default PackageCard
