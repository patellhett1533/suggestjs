import type { Metadata } from 'next'
import './_style/globals.css'
import Header from './_components/Header'

export const metadata: Metadata = {
  title: 'Suggest Js  - Find Packages',
  description: 'thsi is a plateform for finding a appropriate npm packages',
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
