// type Reference<T, R> = T extends 'get' ? R : string | null;
interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
type Structure<T, P> = T extends 'get'
  ? { id: string } & DateType & Required<P>
  : T extends 'gets'
  ? GetsType<{ id: string } & DateType & Required<P>>
  : Partial<DateType> & (T extends 'patch' ? Partial<P> : P);

export type works<T='get'> = Structure<
T,
{
  /**
   * タイトル
   */
  title?: string
  /**
   * 説明
   */
  explanation?: string
  /**
   * 期間
   */
  period?: string
  /**
   * 人数
   */
  people?: string
  /**
   * 役割
   */
  role?: string
  /**
   * 使用技術
   */
  skill?: ('TypeScript' | 'JavaScript' | 'Python' | 'C' | 'Java' | 'C++' | 'React' | 'Vue.js' | 'Svelte' | 'Angular' | 'Next.js' | 'Nuxt.js' | 'Dart' | 'Flutter' | 'Figma' | 'Github' | 'Firebase Firestore' | 'Firebase Cloud Storage' | 'Firebase Cloud Function' | 'Firebase Authentication' | 'GCP' | 'AWS' | 'TailwindCSS' | 'Node.js' | 'HTML' | 'CSS' | 'styled-jsx' | 'microCMS' | 'Express' | 'NestJS' | 'Apollo' | 'GraphQL' | 'Heroku' | 'Vercel' | 'Redux' | 'Recoil' | 'Go' | 'MySQL' | 'Docker' | 'Agora' | 'Ruby' | 'Rails')[]
  /**
   * 画像
   */
  image?: { url: string, width: number, height: number }
}>

export type profile<T='get'> = Structure<
T,
{
  /**
   * 名前
   */
  name?: string
  /**
   * 自己紹介
   */
  introduce?: string
  /**
   * プロフィール画像
   */
  image?: { url: string, width: number, height: number }
  /**
   * 趣味
   */
  hobby?: string
}>


export interface EndPoints {
  get: {
    'works': works<'get'>
    'profile': profile<'get'>
  }
  gets: {
    'works': works<'gets'>
    'profile': profile<'gets'>
  }
  post: {
    'works': works<'post'>
    'profile': profile<'post'>
  }
  put: {
    'works': works<'put'>
    'profile': profile<'put'>
  }
  patch: {
    'works': works<'patch'>
    'profile': profile<'patch'>
  }
}
