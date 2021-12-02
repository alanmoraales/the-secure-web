import { Grid, Image } from '@chakra-ui/react'
import { When } from 'react-if'
import GoToButton from '@atoms/buttons/GoToButton'
import Heading from '@atoms/typography/Heading'
import Body from '@atoms/typography/Body'
import { ArticleCardRow } from '@atoms/ArticleCard'

interface IArticleCard {
  coverUrl: string
  title: string
  description: string
  date: string
  slug: string
  coverWidth: number
  coverHeight: number
  subject?: string
}

const ArticleCard = ({
  coverUrl,
  title,
  description,
  date,
  slug,
  coverWidth,
  coverHeight,
  subject,
}: IArticleCard) => (
  <Grid gap={4} templateColumns={{ base: 'auto', sm: '35% auto' }}>
    <Image
      src={coverUrl}
      alt={title}
      width="100%"
      htmlWidth={coverWidth}
      htmlHeight={coverHeight}
      objectFit="contain"
      objectPosition="center"
      loading="lazy"
    />
    <Grid gap={4} height="fit-content">
      <Grid gap={1}>
        <ArticleCardRow>
          <Heading variant="h4">{title}</Heading>
        </ArticleCardRow>
        <When condition={subject}>
          <Body color="primary">{subject}</Body>
        </When>
      </Grid>
      <Body>{description}</Body>
      <ArticleCardRow>
        <Body color="opaque" weight="light">
          {date}
        </Body>
        <GoToButton href={slug} label="Seguir leyendo" />
      </ArticleCardRow>
    </Grid>
  </Grid>
)

export default ArticleCard
