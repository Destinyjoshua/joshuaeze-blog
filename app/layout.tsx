import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blog | Joshua Eze',
  description: 'Thoughts on business strategy, African contexts, and building under constraints.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-[#e5e5e5] antialiased">
        <nav className="border-b border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="font-semibold text-xl tracking-tighter">Joshua Eze</a>
            <div className="flex gap-6 text-sm">
              <a href="https://joshuaeze.com" className="hover:text-[#c9a84c] transition-colors">Main Site</a>
              <a href="/blog" className="hover:text-[#c9a84c] transition-colors">Blog</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="border-t border-white/10 py-8 mt-12">
          <div className="max-w-4xl mx-auto px-4 text-sm text-[#a3a3a3]">
            © {new Date().getFullYear()} Joshua Eze. Powered by Sanity.
          </div>
        </footer>
      </body>
    </html>
  )
}
