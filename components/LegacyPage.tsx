import {legacyPage} from '../lib/legacy';
export default function LegacyPage({path}:{path:string}){return <div dangerouslySetInnerHTML={{__html:legacyPage(path).body}}/>}
