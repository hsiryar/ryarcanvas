import { neon } from '@neondatabase/serverless';
import fs from 'node:fs';
const site='https://riarcanvas.online';
const database=process.env.DATABASE_URL;
let posts=[];
if(database){
  // A configured but inaccessible database fails the build: never silently wipe a live blog.
  const sql=neon(database);
  const rows=await sql`SELECT slug,title,description,markdown,created_at,updated_at,published_at FROM posts WHERE published=true ORDER BY published_at DESC, id DESC`;
  posts=rows.map(p=>({slug:p.slug,title:p.title,description:p.description,markdown:p.markdown,createdAt:new Date(p.created_at).toISOString(),updatedAt:new Date(p.updated_at).toISOString(),publishedAt:new Date(p.published_at).toISOString()}));
  for(const p of posts) if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug)) throw new Error(`Invalid published slug: ${p.slug}`);
  console.log(`Synced ${posts.length} published Neon posts.`);
}else console.warn('DATABASE_URL is not configured; building an empty blog. Set it before production publishing.');
fs.mkdirSync('content',{recursive:true});fs.writeFileSync('content/posts.generated.json',JSON.stringify(posts,null,2)+'\n');
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&apos;');
const fixed=['/','/services/website-development.html','/services/ecommerce-development.html','/services/digital-marketing.html','/coming-soon/ai-calling-agent.html','/coming-soon/automated-lead-generation.html','/coming-soon/academy.html','/privacy.html','/terms.html','/contact.html','/blog.html'];
const entries=[...fixed.map(p=>({loc:site+p})),...posts.map(p=>({loc:`${site}/blog/${p.slug}.html`,lastmod:p.updatedAt}))];
fs.writeFileSync('public/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+entries.map(e=>`  <url><loc>${escape(e.loc)}</loc>${e.lastmod?`<lastmod>${escape(e.lastmod)}</lastmod>`:''}</url>`).join('\n')+'\n</urlset>\n');
const items=posts.map(p=>`<item><title>${escape(p.title)}</title><link>${site}/blog/${escape(p.slug)}.html</link><guid isPermaLink="true">${site}/blog/${escape(p.slug)}.html</guid><description>${escape(p.description)}</description><pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate></item>`).join('\n');
fs.writeFileSync('public/rss.xml',`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>RYAR Canvas Blog</title><link>${site}/blog.html</link><description>Articles from RYAR Canvas</description>${items}</channel></rss>`);
// Next.js static export rejects a dynamic route with zero parameters. Generate the route
// only when there are real published posts; no fake placeholder article is emitted.
const routeDir='app/blog/[slug]';
fs.mkdirSync(routeDir,{recursive:true});
if(posts.length)fs.copyFileSync('templates/article-page.tsx',`${routeDir}/page.tsx`);
else fs.rmSync(`${routeDir}/page.tsx`,{force:true});
