import { FC } from 'react'
import { Grid } from '@chakra-ui/react'
import { Heading } from 'components/atoms/Typography'
import Flex from 'components/atoms/Flex'
import GoToButton from 'components/atoms/Buttons/GoToButton'

interface ISection {
  title: string
  seeAllUrl?: string
  seeAllLabel?: string
}

const Section: FC<ISection> = ({
  title,
  seeAllUrl,
  seeAllLabel = 'See all',
  children,
}) => (
  <Grid as="section" gap={8} width="100%">
    <Heading variant="h6">{title}</Heading>
    {children}
    <Flex direction="row-reverse">
      <GoToButton href={seeAllUrl} label={seeAllLabel} />
    </Flex>
  </Grid>
)

export default Section
