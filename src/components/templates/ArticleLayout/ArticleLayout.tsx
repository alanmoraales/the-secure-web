import { FC } from 'react'
import { Box, SlideFade } from '@chakra-ui/react'
import Head from '@atoms/Head'
import { ArticleHeader } from '@molecules/Article'
import { GetEnumKeys } from 'utils/common'
import { EArticleType } from '@declarations/article'

interface IArticleLayout {
  title: string
  type?: GetEnumKeys<typeof EArticleType>
  date: string
}

const ArticleLayout: FC<IArticleLayout> = ({
  children,
  title,
  ...headerProps
}) => (
  <SlideFade in>
    <Head title={title} />
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
          img: {
            paddingTop: 6,
            paddingBottom: 6,
          },
        }}
      >
        {children}
      </Box>
    </Box>
  </SlideFade>
)

export default ArticleLayout