import pages from '../content/legacy-pages.json';
type LegacyPage={title:string;description:string;body:string};
const all=pages as Record<string,LegacyPage>;
export function legacyPage(path:string){const page=all[path];if(!page)throw new Error(`Missing content: ${path}`);return page}
export function shell(depth=0){
 const body=legacyPage('index.html').body;
 const header=body.match(/<a class="skip-link"[\s\S]*?<\/header>/)?.[0] || '';
 const footer=body.match(/<footer id="contact"[\s\S]*$/)?.[0] || '';
 const prefix='../'.repeat(depth);
 const rewrite=(text:string)=>text.replace(/(href|src)="(?!https?:|#|mailto:|\/)([^"]+)"/g,(_,attribute,path)=>`${attribute}="${prefix}${path}"`);
 return {header:rewrite(header),footer:rewrite(footer)};
}
