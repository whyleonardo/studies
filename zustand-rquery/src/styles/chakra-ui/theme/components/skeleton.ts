import { ComponentStyleConfig } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const { Skeleton } = chakraTheme.components

const ThemedSkeleton: ComponentStyleConfig = {
	...Skeleton
}

export default ThemedSkeleton
