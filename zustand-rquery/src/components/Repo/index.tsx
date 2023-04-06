import { useCallback } from 'react'

import { Card } from '@/components/Card'
import { Loading } from '@/components/Loading'

import { useFetchRepos } from '@/queries/repo'
import { useFavoriteRepoStore } from '@/store/useFavoriteRepos'
import { useSearchUser } from '@/store/useSearchUser'
import { Grid, ScaleFade } from '@chakra-ui/react'

const Repo = () => {
	const user = useSearchUser((state) => state.user)

	const {
		data,
		isFetched,
		isFetching,
		isLoading,
		isError,
		isSuccess,
		isRefetching
	} = useFetchRepos(user)

	const addToFavorites = useFavoriteRepoStore((state) => state.addToFavorites)
	const favoriteRepoIds = useFavoriteRepoStore((state) => state.favoriteRepoIds)
	const removeFromFavorites = useFavoriteRepoStore(
		(state) => state.removeFromFavorites
	)

	const handleAddToFavorites = useCallback((repoId: number) => {
		addToFavorites(repoId)
	}, [])

	const handleRemoveFromFavorites = useCallback((repoId: number) => {
		removeFromFavorites(repoId)
	}, [])

	console.log({
		data,
		isFetching,
		isLoading,
		isError,
		isSuccess,
		isRefetching
	})
	return (
		<ScaleFade initialScale={0.8} in={isFetched}>
			<Grid
				p="2"
				pt="0"
				templateColumns={{
					sm: 'repeat(1, 1fr)',
					md: 'repeat(2, 1fr)',
					lg: 'repeat(3, 1fr)'
				}}
				gap={6}
			>
				{data &&
					data.map((repo) => (
						<Card
							repo={repo}
							addToFavorites={handleAddToFavorites}
							removeFromFavorites={handleRemoveFromFavorites}
							key={repo.id}
							isFavorite={favoriteRepoIds.includes(repo.id)}
						/>
					))}

				{isLoading && <Loading />}
			</Grid>
		</ScaleFade>
	)
}

export default Repo
