Blog for Joshua Eze.

Separate repo for blog.joshuaeze.com using Next.js + Sanity.

See setup in previous conversations or the files.

To fix build: vercel.json uses --legacy-peer-deps for the next-sanity / sanity version conflict.

Set env vars in Vercel:
NEXT_PUBLIC_SANITY_PROJECT_ID=wepxsis1
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

Studio embedded at /studio in the app.

Deploy latest main.