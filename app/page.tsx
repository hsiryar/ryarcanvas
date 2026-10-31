import LegacyPage from '../components/LegacyPage';
import {legacyPage} from '../lib/legacy';
import {pageMetadata} from '../lib/metadata';
const path='index.html'; const info=legacyPage(path);
export const metadata=pageMetadata(info.title,info.description,"/");
export default function Page(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:"RYAR Canvas",url:"https://riarcanvas.online/",logo:"https://riarcanvas.online/assets/images/ryar-canvas-logo.png",sameAs:["https://www.instagram.com/ryarcanvas/"]}).replace(/</g,'\\u003c')}}/><LegacyPage path={path}/></>}
