import LegacyPage from '../../components/LegacyPage';
import {legacyPage} from '../../lib/legacy';
import {pageMetadata} from '../../lib/metadata';
const path='terms.html'; const info=legacyPage(path);
export const metadata=pageMetadata(info.title,info.description,"/terms.html");
export default function Page(){return <LegacyPage path={path}/>}
