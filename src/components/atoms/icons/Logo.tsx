import { Icon, IconProps } from '@chakra-ui/react'

// TODO use useTheme to change the #f9f9f9 color in circle fill
const Logo = (props: IconProps) => (
  <Icon color="#A61A1A" viewBox="0 0 32 32" {...props}>
    <path
      d="M16 23.729a6.007 6.007 0 0 1-6-6v-6.457l6-3 6 3v6.456a6.007 6.007 0 0 1-6 6v.001Zm-4-11.222v5.222a4 4 0 1 0 8 0v-5.222l-4-2-4 2Z"
      fill="currentColor"
    />
    <path
      d="M16 31a1 1 0 0 1-.504-.136l-12-7A1 1 0 0 1 3 23V9a1 1 0 0 1 .496-.864l12-7a1 1 0 0 1 1.008 0l12 7-1.008 1.728L16 3.158 5 9.574v12.852l11 6.417 11-6.417V15h2v8a1 1 0 0 1-.496.864l-12 7A1 1 0 0 1 16 31Z"
      fill="currentColor"
    />
  </Icon>
)

export default Logo
