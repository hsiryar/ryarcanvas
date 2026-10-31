import postsData from '../content/posts.generated.json';
export type Post = {slug:string; title:string; description:string; markdown:string; createdAt:string; updatedAt:string; publishedAt:string};
export const posts=postsData as Post[];
export const siteUrl='https://ryarcanvas.online';
