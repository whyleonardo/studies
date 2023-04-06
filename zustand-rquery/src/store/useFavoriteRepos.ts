import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type FavoriteRepoStore = {
	favoriteRepoIds: number[]
	addToFavorites: (id: number) => void
	removeFromFavorites: (id: number) => void
}

export const useFavoriteRepoStore = create(
	persist<FavoriteRepoStore>(
		(set) => ({
			favoriteRepoIds: [],
			addToFavorites: (repoId: number) => {
				set((state) => ({
					favoriteRepoIds: [...state.favoriteRepoIds, repoId]
				}))
			},
			removeFromFavorites: (repoId: number) => {
				set((state) => ({
					favoriteRepoIds: state.favoriteRepoIds.filter((id) => id !== repoId)
				}))
			}
		}),
		{
			name: 'favorites-storage',
			storage: createJSONStorage(() => sessionStorage)
		}
	)
)
