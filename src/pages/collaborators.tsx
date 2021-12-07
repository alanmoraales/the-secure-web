import { Grid } from '@chakra-ui/react'
import PageTemplate from '@templates/PageTemplate'
import Head from '@atoms/Head'

const Collaborators = () => (
  <>
    <Head />
    <PageTemplate>
      <Grid
        w="100%"
        templateColumns={{ base: 'auto', lg: '65% auto' }}
        gap={16}
      >
        <Grid gap={16}></Grid>
      </Grid>
    </PageTemplate>
  </>
)

export default Collaborators
