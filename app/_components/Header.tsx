import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="w-full px-12 h-24 flex items-center justify-between border-b border-border">
      <p className="text-2xl font-semibold">Suggest js</p>
      <Link href="https://github.com/patellhett1533/suggestjs" target="_blank">
        <Image src="/images/github.svg" width={20} height={20} alt="github" />
      </Link>
    </div>
  )
}

export default Header
