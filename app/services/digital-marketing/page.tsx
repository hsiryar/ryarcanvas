import LegacyPage from '../../../components/LegacyPage';
import {legacyPage} from '../../../lib/legacy';
import {pageMetadata} from '../../../lib/metadata';
const path='services/digital-marketing.html'; const info=legacyPage(path);
export const metadata=pageMetadata(info.title,info.description,"/services/digital-marketing.html");
export default function Page(){return <LegacyPage path={path}/>}
