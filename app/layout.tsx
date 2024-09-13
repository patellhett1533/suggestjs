import type { Metadata } from 'next'
import './_style/globals.css'
import Header from './_components/Header'

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
