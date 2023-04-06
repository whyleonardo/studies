import { useState } from 'react'

import { useFetchRepos } from '@/queries/repo'
import { useSearchUser } from '@/store/useSearchUser'
import { SearchIcon } from '@chakra-ui/icons'
import {
	HStack,
	InputGroup,
	Input,
	InputRightElement,
	IconButton
} from '@chakra-ui/react'

export const Search = () => {
	const [inputValue, setInputValue] = useState<string>('')
	const searchUser = useSearchUser((state) => state.handleSearchUser)
	const user = useSearchUser((state) => state.user)

	const { refetch } = useFetchRepos(user)

	function handleSearchUser() {
		searchUser(inputValue)
		refetch()
	}

	function handleChangeUser(value: string) {
		setInputValue(value)
	}

	return (
		<HStack as="header" w="full" h="4rem" justifyContent="center">
			<InputGroup w="300px">
				<InputRightElement>
					<IconButton
						onClick={handleSearchUser}
						aria-label="Search User"
						icon={<SearchIcon />}
					/>
				</InputRightElement>

				<Input onChange={(e) => handleChangeUser(e.target.value)} />
			</InputGroup>
		</HStack>
	)
}
