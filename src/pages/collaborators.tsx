import { Divider, Grid } from '@chakra-ui/react'
import PageTemplate from '@templates/PageTemplate'
import Section from '@templates/Section'
import Head from '@atoms/Head'
import { Fragment } from 'react'
import { When } from 'react-if'
import Heading from '@atoms/typography/Heading'
import Body from '@atoms/typography/Body'
import Flex from '@atoms/Flex'

const collaborators = [
  {
    name: 'Alan Morales',
    description:
      'Estudiante de ingeniería de software enfocado en la seguridad web.',
    position: 'Escritor',
  },
  {
    name: 'Alberto Marín',
    description:
      'Estudiante de ingeniería de software experto en programación con sockets.',
    position: 'Escritor',
  },
  {
    name: 'Itzel Moo',
    description:
      'Estudiante de ingeniería de software enfocado en la seguridad de los datos dentro de las redes.',
    position: 'Escritora',
  },
  {
    name: 'Jorge Chí',
    description:
      'Estudiante de ingeniería de software enfocado el internet de las cosas.',
    position: 'Escritor',
  },
]

const Collaborators = () => (
  <>
    <Head />
    <PageTemplate>
      <Grid
        w="100%"
        templateColumns={{ base: 'auto', lg: '55% auto' }}
        gap={16}
      >
        <Grid gap={16}>
          <Section title="Colaboradores">
            {collaborators.map(({ name, description, position }, index) => (
              <Fragment key={name}>
                <Grid gap={4}>
                  <Flex gap={2}>
                    <Heading variant="h5">{name}</Heading>
                    <Body color="opaque" weight="light">
                      &bull;
                    </Body>
                    <Body color="primary">{position}</Body>
                  </Flex>
                  <Body>{description}</Body>
                </Grid>
                <When condition={index + 1 !== collaborators.length}>
                  <Divider />
                </When>
              </Fragment>
            ))}
          </Section>
        </Grid>
      </Grid>
    </PageTemplate>
  </>
)

export default Collaborators
