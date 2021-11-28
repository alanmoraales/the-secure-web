import { FC } from 'react'
import { Grid } from '@chakra-ui/react'
import Heading from '@atoms/typography/Heading'

interface ISection {
  title: string
}

const Section: FC<ISection> = ({ title, children }) => (
  <Grid as="section" gap={8} width="100%">
    <Heading variant="h6">{title}</Heading>
    {children}
  </Grid>
)

export default Section
