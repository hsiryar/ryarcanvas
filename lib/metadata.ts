import type {Metadata} from 'next';
const site='https://ryarcanvas.online';
export function pageMetadata(title:string,description:string,path:string,article?:{publishedTime:string;modifiedTime:string}):Metadata {
 const url=site+path;
 return {title,description,alternates:{canonical:url},openGraph:{type:article?'article':'website',siteName:'RYAR Canvas',title,description,url,images:[{url:site+'/assets/images/og-image.png',width:1200,height:630,alt:'RYAR Canvas logo'}],...(article||{})},twitter:{card:'summary_large_image',title,description,images:[site+'/assets/images/og-image.png']},robots:{index:true,follow:true}};
}
