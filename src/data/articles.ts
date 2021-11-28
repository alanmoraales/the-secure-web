import { IArticle, EArticleType } from '@declarations/article'

const articles: IArticle[] = [
  {
    title: 'Programación de aplicaciones con sockets',
    coverUrl:
      'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    type: EArticleType.Post,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    slug: '/posts/socket-programming',
    date: 'Diciembre 1, 2021',
    coverWidth: 1222,
    coverHeight: 687,
  },
  {
    title: 'Seguridad en la comunicación de datos en una red',
    coverUrl:
      'https://images.unsplash.com/photo-1573164713712-03790a178651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
    type: EArticleType.Post,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    slug: '/posts/data-security',
    date: 'Diciembre 1, 2021',
    coverWidth: 1920,
    coverHeight: 1352,
  },
  {
    title: 'Seguridad en la web',
    coverUrl:
      'https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    type: EArticleType.Post,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    slug: '/posts/web-security',
    date: 'Diciembre 1, 2021',
    coverWidth: 1920,
    coverHeight: 1352,
  },
  {
    title: 'Internet de las cosas',
    coverUrl:
      'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    type: EArticleType.Post,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    slug: '/posts/internet-of-things',
    date: 'Diciembre 1, 2021',
    coverWidth: 1920,
    coverHeight: 1352,
  },
]

export default articles
