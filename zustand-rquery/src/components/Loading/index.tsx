import { Center, Spinner } from '@chakra-ui/react'

const arr: Array<number> = [1]

arr.length = 20

export const Loading = () => {
	return (
		<Center h="90vh" w="full">
			<Spinner />
		</Center>
	)
}
