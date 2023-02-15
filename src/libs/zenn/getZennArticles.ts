import { PostItem } from '@/types/zenn'
import posts from '../../../.contents/posts.json'

export const getZennArticles = (): PostItem[] => {
  return posts as PostItem[]
}
