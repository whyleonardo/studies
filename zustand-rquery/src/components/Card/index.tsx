import { Repo } from '@/queries/repo/types'
import { Box, Card as ChakraCard, Button, Heading } from '@chakra-ui/react'

type CardProps = {
	repo: Repo
	isFavorite: boolean
	addToFavorites: (id: number) => void
	removeFromFavorites: (id: number) => void
}

export const Card = ({
	repo,
	addToFavorites,
	isFavorite,
	removeFromFavorites
}: CardProps) => {
	function handleToggleFavorite() {
		!isFavorite ? addToFavorites(repo.id) : removeFromFavorites(repo.id)
	}

	return (
		<ChakraCard
			display="flex"
			flexDirection="row"
			p="10"
			justifyContent="space-between"
		>
			<Heading
				fontSize="2xl"
				color="blue.100"
				transition="150ms ease-in"
				cursor="pointer"
				_hover={{
					color: 'blue.200'
				}}
			>
				{repo.name.toLowerCase()}
			</Heading>
			<Box>
				<Button
					onClick={handleToggleFavorite}
					colorScheme={isFavorite ? 'red' : 'blue'}
				>
					{isFavorite ? 'Remove' : 'Favorite'}
				</Button>
			</Box>
		</ChakraCard>
	)
}
