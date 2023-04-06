export const User = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000))
	const response = await fetch('https://dummyjson.com/users/1')
	const user = await response.json()

	return (
		<div>
			<h3>{user.username}</h3>
			<h3>{user.email}</h3>
			<h3>{user.age}</h3>
		</div>
	)
}
