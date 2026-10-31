import LegacyPage from '../../../components/LegacyPage';
import {legacyPage} from '../../../lib/legacy';
import {pageMetadata} from '../../../lib/metadata';
const path='coming-soon/academy.html'; const info=legacyPage(path);
export const metadata=pageMetadata(info.title,info.description,"/coming-soon/academy.html");
export default function Page(){return <LegacyPage path={path}/>}
