import { FC } from 'react'
import { Box, SlideFade } from '@chakra-ui/react'
import Head from '@atoms/Head'
import { ArticleHeader } from '@molecules/Article'

interface IArticleLayout {
  title: string
  subject: string
  date: string
}

const ArticleLayout: FC<IArticleLayout> = ({
  children,
  title,
  ...headerProps
}) => {
  const pageTitle = `${title} | The Secure Web`

  return (
    <>
      <Head title={pageTitle} />
      <SlideFade in>
        <Box pt={16}>
          <ArticleHeader title={title} {...headerProps} />
          <Box
            sx={{
              margin: '0 auto',
              maxWidth: '70ch',
              paddingTop: 8,
              padding: 6,
              '& p': {
                fontSize: 'blogParagraph',
                paddingBottom: 4,
                color: 'neutral.black.normal',
              },
              '& h4': {
                fontFamily: 'heading',
                fontSize: 'h4',
                paddingBottom: 4,
                paddingTop: 6,
                color: 'neutral.black.normal',
              },
              '& h5': {
                fontFamily: 'heading',
                fontSize: 'h5',
                paddingBottom: 4,
                paddingTop: 6,
                color: 'neutral.black.normal',
              },
              '& img': {
                paddingTop: 6,
                paddingBottom: 6,
                width: '100%',
              },
              '& blockquote': {
                padding: 4,
                marginTop: 6,
                marginBottom: 6,
              },
              '& blockquote p::before, & blockquote p::after': {
                content: '"“"',
              },
              '& blockquote p::after': {
                content: '"”"',
              },
              '& a': {
                textDecoration: 'underline',
              },
              '& a:hover': {
                color: 'primary.normal',
              },
              '& li': {
                fontSize: 'blogParagraph',
                color: 'neutral.black.normal',
                marginLeft: 8,
              },
              '& ol, ul': {
                paddingBottom: 4,
              },
              '& pre': {
                fontSize: 'blogParagraph',
                marginTop: 0,
                marginBottom: 4,
              },
            }}
          >
            {children}
          </Box>
        </Box>
      </SlideFade>
    </>
  )
}

export default ArticleLayout
