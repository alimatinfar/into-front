import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://intodev.com',
      lastModified: new Date(),
    },
  ]
}