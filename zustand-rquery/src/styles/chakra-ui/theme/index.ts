import Button from './components/button'
import Card from './components/card'
import Heading from './components/heading'
import Input from './components/input'
import Skeleton from './components/skeleton'
import Spinner from './components/spinner'

import colors from './foundations/colors'

import { extendBaseTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
	disableTransitionOnChange: false
}

const overrides = {
	colors,
	config,

	// extend here just the components you need to use
	components: {
		Button,
		Heading,
		Card,
		Input,
		Skeleton,
		Spinner
	}
}

export const theme = extendBaseTheme(overrides)
