import {shell} from '../lib/legacy';
export default function Shell({children,depth=0}:{children:React.ReactNode;depth?:number}){const {header,footer}=shell(depth);return <><div dangerouslySetInnerHTML={{__html:header}}/><main id="main">{children}</main><div dangerouslySetInnerHTML={{__html:footer}}/></>}
