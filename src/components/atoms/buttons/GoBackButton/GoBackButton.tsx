import router from 'next/router'
import Link from '@atoms/Link'
import Flex from '@atoms/Flex'
import Heading from '@atoms/typography/Heading'
import BackArrow from '@atoms/icons/BackArrow'

interface IGoBackButton {
  href?: string
  label?: string
}

const onGoBack = () => {
  router.back()
}

const GoBackButton = ({ href = '#', label = 'Regresar' }: IGoBackButton) => (
  <Link onClick={onGoBack}>
    <Flex
      gap={2}
      alignItems="center"
      sx={{
        color: 'neutral.black.normal',
        '&:hover': {
          color: 'primary.normal',
        },
      }}
    >
      <BackArrow color="inherit" />
      <Heading variant="h6" textDecoration="underline" color="inherit">
        {label}
      </Heading>
    </Flex>
  </Link>
)

export default GoBackButton
