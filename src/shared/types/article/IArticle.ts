import { TArticleType } from './EArticleType'

interface IArticle {
  title: string
  slug: string
  description: string
  type: TArticleType
  coverUrl: string
  date: string
  coverWidth: number
  coverHeight: number
}

export type { IArticle }
