import Button from './components/button'

import colors from './foundations/colors'

import { extendBaseTheme, ThemeConfig } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  disableTransitionOnChange: false
}

const { Heading, Drawer } = chakraTheme.components

const overrides = {
  colors,
  config,

  // extend here just the components you need to use
  components: {
    Button,
    Heading,
    Drawer
  }
}

export const theme = extendBaseTheme(overrides)
