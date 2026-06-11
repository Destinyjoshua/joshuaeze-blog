# blog.joshuaeze.com

Personal blog for Joshua Eze, powered by Next.js + Sanity CMS.

## Setup

1. **Create a Sanity project**
   - Go to https://www.sanity.io and create a new project (free tier is fine).
   - Use the "Blog" starter template if available, or create a `post` document type.
   - Copy your **Project ID** and **Dataset** (usually `production`).

2. **Configure environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=wepxsis1
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```

3. **Add your Post schema**
   - In your Sanity project, go to the schema editor.
   - Copy the content from `sanity-schema.ts` in this repo into your Sanity schema (create `post.ts` and `blockContent.ts`).

4. **Run locally**
   ```bash
   npm run dev
   ```

5. **Deploy**
   - Push to GitHub.
   - Import to Vercel as a new project.
   - Add the domain `blog.joshuaeze.com` in Vercel.
   - Point `blog` CNAME to `cname.vercel-dns.com` in Namecheap.

## Pages
- `/` — Blog homepage / landing
- `/blog` — List of posts
- `/blog/[slug]` — Individual post

## Notes
- All content is managed in Sanity Studio (hosted at manage.sanity.io).
- Images are handled automatically via Sanity's CDN.
- The design uses a dark theme to match the main site at joshuaeze.com.

## Next Steps
- Customize styling in `app/globals.css`
- Add categories, authors, or more fields in Sanity schema
- Set up RSS feed or SEO improvements