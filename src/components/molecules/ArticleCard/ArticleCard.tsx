import { Grid, Image } from '@chakra-ui/react'
import GoToButton from '@atoms/buttons/GoToButton'
import Heading from '@atoms/typography/Heading'
import Body from '@atoms/typography/Body'
import { ArticleCardRow } from '@atoms/ArticleCard'
import { EArticleType, TArticleType } from '@declarations/article'

interface IArticleCard {
  coverUrl: string
  type?: TArticleType
  title: string
  description: string
  date: string
  slug: string
  coverWidth: number
  coverHeight: number
}

const ArticleCard = ({
  coverUrl,
  type = EArticleType.Post,
  title,
  description,
  date,
  slug,
  coverWidth,
  coverHeight,
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
      <ArticleCardRow>
        <Heading variant="h4">{title}</Heading>
      </ArticleCardRow>
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
