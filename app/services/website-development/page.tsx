import LegacyPage from '../../../components/LegacyPage';
import {legacyPage} from '../../../lib/legacy';
import {pageMetadata} from '../../../lib/metadata';
const path='services/website-development.html'; const info=legacyPage(path);
export const metadata=pageMetadata(info.title,info.description,"/services/website-development.html");
export default function Page(){return <LegacyPage path={path}/>}
