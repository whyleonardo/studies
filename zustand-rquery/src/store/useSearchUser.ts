import { create } from 'zustand'

type SearchUserStore = {
	user: string
	handleSearchUser: (name: string) => void
}

export const useSearchUser = create<SearchUserStore>((set) => ({
	user: '',
	handleSearchUser: (name: string) => {
		set(() => ({
			user: name
		}))
	}
}))
