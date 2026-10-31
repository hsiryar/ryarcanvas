import {notFound} from 'next/navigation';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
import Shell from '../../../components/Shell';
import {posts,siteUrl} from '../../../lib/posts';
import {pageMetadata} from '../../../lib/metadata';
export const dynamicParams=false;
export function generateStaticParams(){return posts.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const post=posts.find(p=>p.slug===slug);if(!post)return {};return pageMetadata(`${post.title} | RYAR Canvas`,post.description,`/blog/${post.slug}.html`,{publishedTime:post.publishedAt,modifiedTime:post.updatedAt})}
const md=new MarkdownIt({html:false,linkify:true,breaks:false});
function renderMarkdown(text:string){return sanitizeHtml(md.render(text),{allowedTags:[...sanitizeHtml.defaults.allowedTags,'img','h1','h2'],allowedAttributes:{a:['href','title','rel'],img:['src','alt','title'],code:['class']},allowedSchemes:['http','https','mailto'],allowProtocolRelative:false,transformTags:{a:(tag,attribs)=>({tagName:tag,attribs:{...attribs,rel:'nofollow noopener noreferrer'}})}})}
export default async function Article({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=posts.find(x=>x.slug===slug);if(!p)notFound();const data={'@context':'https://schema.org','@type':'BlogPosting',headline:p.title,description:p.description,datePublished:p.publishedAt,dateModified:p.updatedAt,mainEntityOfPage:`${siteUrl}/blog/${p.slug}.html`,publisher:{'@type':'Organization',name:'RYAR Canvas',url:siteUrl}};return <Shell depth={1}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\\u003c')}}/><article className="container post-content"><a className="back-link" href="../blog.html">← Back to blog</a><p className="post-meta">{new Date(p.publishedAt).toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'})}</p><h1>{p.title}</h1><p className="legal-intro">{p.description}</p><div className="markdown" dangerouslySetInnerHTML={{__html:renderMarkdown(p.markdown)}}/></article></Shell>}
