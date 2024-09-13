import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/public/',
    },
    sitemap: 'https://suggestjs.vercel.app/sitemap.xml',
  }
}
