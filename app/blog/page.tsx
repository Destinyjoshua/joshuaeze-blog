import Link from 'next/link'
import { client, Post } from '@/lib/sanity'

async function getPosts(): Promise<Post[]> {
  const posts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage
    }`
  )
  return posts
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      {posts.length === 0 ? (
        <p>No posts yet. Check back soon!</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post._id} className="border-b pb-8">
              <Link href={`/blog/${post.slug.current}`}>
                <h2 className="text-2xl font-semibold hover:text-[#c9a84c] transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-[#666] mt-1">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
              {post.excerpt && (
                <p className="mt-3 text-[#a3a3a3]">{post.excerpt}</p>
              )}
              <Link 
                href={`/blog/${post.slug.current}`}
                className="inline-block mt-3 text-[#c9a84c] hover:underline"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}