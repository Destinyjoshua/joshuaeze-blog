import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

if (!projectId) {
  throw new Error(
    'Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable. ' +
    'Please set it in your .env.local or Vercel environment variables.'
  );
}

export const client = createClient({
  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: true, // `false` if you want to ensure fresh data
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Type for a blog post
export interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  publishedAt: string
  excerpt?: string
  body?: any[] // Portable Text
  mainImage?: any
}