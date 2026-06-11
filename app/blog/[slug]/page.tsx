import { client, urlFor, Post } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

async function getPost(slug: string): Promise<Post | null> {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      body,
      mainImage
    }`,
    { slug }
  )
  return post
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/blog" className="text-[#c9a84c] hover:underline mb-6 inline-block">
        ← Back to Blog
      </Link>

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      
      <p className="text-[#666] mb-8">
        {new Date(post.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </p>

      {post.mainImage && (
        <img 
          src={urlFor(post.mainImage).width(800).url()} 
          alt={post.title}
          className="w-full h-auto mb-8 rounded-lg"
        />
      )}

      <div className="prose prose-invert max-w-none">
        {post.body && <PortableText value={post.body} />}
      </div>
    </div>
  )
}