import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="w-full md:px-12 px-6 h-24 flex items-center justify-between border-b border-border">
      <Link href="/">
        <Image
          src="/images/SuggestJS.png"
          width={150}
          height={50}
          alt="logo"
          className="max-md:hidden"
        />
        <Image
          src="/images/SuggestJS.png"
          width={120}
          height={50}
          alt="logo"
          className="md:hidden"
        />
      </Link>
      <Link href="https://github.com/patellhett1533/suggestjs" target="_blank">
        <Image src="/images/github.svg" width={20} height={20} alt="github" />
      </Link>
    </div>
  )
}

export default Header
