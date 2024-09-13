'use client'
import React from 'react'
import Image from 'next/image'

interface Props {
  slug: string
}

const CopyBox = (props: Props) => {
  const [copied, setCopied] = React.useState(false)

  const copyText = (text: string) => {
    setCopied(true)
    navigator.clipboard.writeText(text)
  }

  React.useEffect(() => {
    if (copied)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
  }, [copied])

  return (
    <p className="border border-border p-4 w-fit mt-4 flex items-center gap-20">
      <span>npm i {props.slug}</span>
      {copied ? (
        <Image
          src="/images/copied.svg"
          width={20}
          height={20}
          alt="copy-success"
          className="cursor-pointer"
        />
      ) : (
        <Image
          src="/images/copy.svg"
          width={20}
          height={20}
          alt="copy"
          className="cursor-pointer"
          onClick={() => copyText(`npm i ${props.slug}`)}
        />
      )}
    </p>
  )
}

export default CopyBox
