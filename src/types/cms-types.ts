type Reference<T, R> = T extends 'get' ? R : string | null;
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
    profile: profile<'get'>
  }
  gets: {
    profile: profile<'gets'>
  }
  post: {
    profile: profile<'post'>
  }
  put: {
    profile: profile<'put'>
  }
  patch: {
    profile: profile<'patch'>
  }
}
