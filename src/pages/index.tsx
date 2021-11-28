import { Grid } from '@chakra-ui/react'
import PageTemplate from '@templates/PageTemplate'
import LatestContentSection from '@organisms/LatestContentSection'
import Head from '@atoms/Head'

const Home = () => (
  <>
    <Head />
    <PageTemplate>
      <Grid
        w="100%"
        templateColumns={{ base: 'auto', lg: '65% auto' }}
        gap={16}
      >
        <Grid gap={16}>
          <LatestContentSection />
        </Grid>
      </Grid>
    </PageTemplate>
  </>
)

export default Home
