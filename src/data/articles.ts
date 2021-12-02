import { IArticle, EArticleType } from '@declarations/article'

const articles: IArticle[] = [
  {
    title: 'Introducción a HTTPS',
    coverUrl:
      'https://www.codedonostia.com/wp-content/uploads/2021/06/http-vs-https.png',
    type: EArticleType.Post,
    description:
      'HTTPS es el protocolo más usado en la web actual, pero antes de su popularidad, la seguridad era algo que solo pocos tenían.',
    slug: '/posts/https-introduction',
    date: 'Diciembre 1, 2021',
    coverWidth: 1920,
    coverHeight: 1080,
    subject: 'Seguridad en la web',
  },
  {
    title: '¿Qué es la programación con sockets?',
    coverUrl:
      'https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/480fecae-1c93-4be8-b3cf-1d7e2b98dc96.jpg',
    type: EArticleType.Post,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    slug: '/posts/what-is-socket-programming',
    date: 'Diciembre 1, 2021',
    coverWidth: 1920,
    coverHeight: 1080,
    subject: 'Programación con sockets',
  },
  {
    title: 'Ventajas de utilizar HTTPS en 2021',
    coverUrl: 'https://i.blogs.es/73af85/pwa-portada/1366_2000.png',
    type: EArticleType.Post,
    description:
      'HTTPS ya no es solo para añadir seguridad. Actualmente, son muchas las caracteristicas de los navegadores que solo están disponibles si tu sitio cuenta en HTTPS.',
    slug: '/posts/https-advantages',
    date: 'Diciembre 1, 2021',
    coverWidth: 1920,
    coverHeight: 1080,
    subject: 'Seguridad en la web',
  },
  {
    title: 'Protocolos de comunicación con Sockets',
    coverUrl:
      'https://thumbs.dreamstime.com/b/connection-electrical-devices-wiring-sockets-design-construction-two-connected-appliances-double-socket-147257126.jpg',
    type: EArticleType.Post,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    slug: '/posts/sockets-protocols',
    date: 'Diciembre 1, 2021',
    coverWidth: 1920,
    coverHeight: 1080,
    subject: 'Programación con sockets',
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
    coverHeight: 1080,
    subject: 'Seguridad en la comunicación de una red',
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
    coverHeight: 1080,
    subject: 'Internet de las cosas',
  },
]

export default articles
