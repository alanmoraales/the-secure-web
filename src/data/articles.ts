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
      'La comunicación local y remota entre aplicaciones se da por medio de elementos llamados Sockets, de forma similar a como funciona la comunicación humana. Siguiendo una serie de reglas, un Socket realiza la labor de emisor y otro de receptor.',
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
    title: 'Protocolos de comunicación con sockets',
    coverUrl:
      'https://thumbs.dreamstime.com/b/connection-electrical-devices-wiring-sockets-design-construction-two-connected-appliances-double-socket-147257126.jpg',
    type: EArticleType.Post,
    description:
      'La comunicación entre Sockets ocurre en la capa de transporte de la aplicación, pueden comunicarse usando el protocolo UDP, TCP o variantes de estos dos protocolos que agregan seguridad o definen la forma de comunicar información específica.',
    slug: '/posts/sockets-protocols',
    date: 'Diciembre 1, 2021',
    coverWidth: 1920,
    coverHeight: 1080,
    subject: 'Programación con sockets',
  },
  {
    title: 'Programación segura de sockets y amenazas',
    coverUrl:
      'https://irp-cdn.multiscreensite.com/55d07fd3/http-https-candado.png',
    type: EArticleType.Post,
    description:
      'Como muchas otras tecnologías, los Sockets no están exentos a ataques y vulnerabilidades. Por lo tanto, es importante conocer las principales amenazas que los atacantes pueden aprovechar y saber contrarrestarlas.',
    slug: '/posts/secure-sockets',
    date: 'Diciembre 1, 2021',
    coverWidth: 1920,
    coverHeight: 1080,
    subject: 'Programación con sockets',
  },
  {
    title: 'Todo sobre SSL',
    coverUrl:
      'https://lh6.googleusercontent.com/VAdBj3tMi9dgEMRput8m5kPoEh3Ky_KWgSpd-Vv0RrkLY5cdXUFa4zTQE8hpizKkg76y0H7bWsfWW3EjGjzoQRNIgemgmIoI8FmoR87b9aybYpYm3sJMB2wpeIjRUPp6ZS6OsRR0',
    type: EArticleType.Post,
    description:
      'Muchos no lo saben, pero SSL es un protocolo que hoy día se encuentra obsoleto. En este blog te presentamos al TLS, sucesor de SSL.',
    slug: '/posts/everything-about-ssl',
    date: 'Diciembre 1, 2021',
    coverWidth: 1920,
    coverHeight: 1080,
    subject: 'Seguridad en la web',
  },
  {
    title: '¿Qué es el internet de las cosas?',
    coverUrl:
      'https://paratodopublico.com/wp-content/uploads/2018/09/westnet-internet.jpg',
    type: EArticleType.Post,
    description:
      'Cuando hablamos de internet lo que hacemos es hablar de la red de interconexión entre los diferentes ordenadores en el mundo. Pues bien, el llamado Internet de las cosas no es sino una red de interconexión digital entre dispositivos, personas y la propia Internet que permite el intercambio de datos entre ellos.',
    slug: '/posts/what-is-internet-of-things',
    date: 'Diciembre 1, 2021',
    coverWidth: 1920,
    coverHeight: 1080,
    subject: 'Internet de las cosas',
  },
  {
    title: '¿Cómo influye el internet de las cosas y por qué se llama así?',
    coverUrl: 'https://www.muylinux.com/wp-content/uploads/2017/08/IoT.png',
    type: EArticleType.Post,
    description:
      'En nuestra vida cotidiana podemos ver una enorme cantidad de objetos conectados que forman parte del Internet de las cosas, es importante saber cómo influye este fenómeno en nuestra vida cotidiana y sus repercusiones en ella.',
    slug: '/posts/why-internet-of-things',
    date: 'Diciembre 1, 2021',
    coverWidth: 1920,
    coverHeight: 1080,
    subject: 'Internet de las cosas',
  },
  {
    title: 'Ventajas y desventajas del internet de las cosas',
    coverUrl:
      'https://www.lavanguardia.com/files/image_449_253/uploads/2020/12/16/5fd9fe36a5895.png',
    type: EArticleType.Post,
    description:
      'Como todo en la vida, el internet de las cosas tiene sus pros y contras. Su crecimiento cada vez es mayor y ya nos ha conquistado en nuestras casas, elementos cotidianos o incluso en infraestructuras como pueden ser plantas de producción de energía,etc.',
    slug: '/posts/advantages-and-disadvantages-of-internet-of-things',
    date: 'Diciembre 1, 2021',
    coverWidth: 1920,
    coverHeight: 1080,
    subject: 'Internet de las cosas',
  },
  {
    title: 'Tipos de protocolos de red',
    coverUrl: '/images/1.png',
    type: EArticleType.Post,
    description:
      'Los protocolos de internet son los procesos que se utilizan para establecer las conexiones y envíar los datos necesarios para la comunicación. Este artículo te enseñará los tradicional de los protocolos de red, así como la seguridad en la comunicación de los mismos VPN e IPsec.',
    slug: '/posts/types-of-protocols',
    date: 'Diciembre 1, 2021',
    coverWidth: 1920,
    coverHeight: 1080,
    subject: 'Seguridad en la comunicación de una red',
  },
  {
    title: 'Seguridad de datos: En qué consiste',
    coverUrl:
      'https://antiun.com/wp-content/uploads/2019/05/tipos-encriptacion-de-datos.png',
    type: EArticleType.Post,
    description:
      'La seguridad de datos se refiere a medidas de protección de la privacidad digital que se aplican para evitar el acceso no autorizado a los datos, los cuales pueden encontrarse en ordenadores, bases de datos, sitios web, etc. La seguridad de datos también protege los datos de una posible corrupción.',
    slug: '/posts/what-is-data-security',
    date: 'Diciembre 1, 2021',
    coverWidth: 1920,
    coverHeight: 1080,
    subject: 'Seguridad en la comunicación de una red',
  },
  {
    title: '¿Cómo proteger mi sitio web?',
    coverUrl:
      'https://images.unsplash.com/photo-1573164713712-03790a178651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
    type: EArticleType.Post,
    description:
      'La Seguridad web requiere de vigilancia en todos los aspectos del diseño y uso de un sitio web. Este artículo te ayudará a entender de dónde vienen las amenazas y qué puedes hacer para fortalecer tu aplicación web contra los ataques más comunes.',
    slug: '/posts/how-to-protect-my-site',
    date: 'Diciembre 1, 2021',
    coverWidth: 1920,
    coverHeight: 1080,
    subject: 'Seguridad en la comunicación de una red',
  },
]

export default articles
