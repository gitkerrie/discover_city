# Search Console and Domain Checklist

Search Console ownership and a custom domain require account-level actions and cannot be committed to the repository.

1. Add `https://mitaste.com/` as a URL-prefix property in Google Search Console.
2. Choose the HTML-file verification method and place the provided file in the repository root.
3. Deploy, confirm verification, then submit `https://mitaste.com/sitemap.xml`.
4. Inspect `/`, `/city/chengdu/`, `/zh/city/chengdu/`, and one guide page. Request indexing only after canonical and rendered content are correct.
5. Review indexing, search queries, countries, and Core Web Vitals weekly for the first month.

Before media outreach, bind a short branded domain in Vercel. Update `siteUrl` in `scripts/site-config.js`, regenerate the site, update the Search Console property, and submit the new sitemap. Keep the Vercel domain redirecting to the canonical domain.
