import type { Metadata } from 'next'
import './_style/globals.css'
import Header from './_components/Header'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Suggest Js  - Find npm packages',
  description: 'this is a plateform for finding a appropriate npm packages',
  keywords: ['npm', 'package', 'suggest', 'suggestjs', 'suggestjs.com'],
  icons: {
    icon: '/images/web-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <Script
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1345310195169349`}
        async
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
