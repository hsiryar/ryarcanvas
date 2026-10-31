const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
if (basePath && (!basePath.startsWith('/') || basePath.endsWith('/'))) throw new Error('NEXT_PUBLIC_BASE_PATH must look like /repository, with no trailing slash');
export default {output:'export', basePath, images:{unoptimized:true}, poweredByHeader:false};
