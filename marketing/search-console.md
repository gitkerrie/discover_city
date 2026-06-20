# Search Console and Domain Checklist

Search Console ownership and a custom domain require account-level actions and cannot be committed to the repository.

1. Add `mitaste.com` as a Domain property in Google Search Console.
2. Copy Google's TXT verification record into Alibaba Cloud DNS without removing existing TXT or MX records.
3. Confirm verification, then submit `https://mitaste.com/sitemap.xml`.
4. Inspect `/`, `/city/chengdu/`, `/zh/city/chengdu/`, and one guide page. Request indexing only after canonical and rendered content are correct.
5. Review indexing, search queries, countries, and Core Web Vitals weekly for the first month.

Before media outreach, bind a short branded domain in Vercel. Update `siteUrl` in `scripts/site-config.js`, regenerate the site, update the Search Console property, and submit the new sitemap. Keep the Vercel domain redirecting to the canonical domain.
