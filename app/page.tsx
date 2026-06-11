import Link from 'next/link'

export default function BlogHome() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-bold tracking-tighter mb-4">Joshua Eze Blog</h1>
      <p className="text-xl text-[#a3a3a3] mb-8 max-w-md mx-auto">
        Frameworks and reflections on business strategy, African contexts, and building with real constraints.
      </p>
      <Link 
        href="/blog" 
        className="inline-block px-8 py-3 bg-[#c9a84c] text-[#0a0a0a] font-semibold rounded-full hover:bg-[#b8973e] transition-colors"
      >
        Read the Blog →
      </Link>
      <div className="mt-12 text-sm text-[#666]">
        Powered by <a href="https://sanity.io" className="hover:text-[#c9a84c]">Sanity</a> + Next.js
      </div>
    </div>
  )
}
