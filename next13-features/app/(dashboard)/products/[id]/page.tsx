const Product = ({ params }: { params: { id: string } }) => {
	return <h1>{params.id}</h1>
}

export default Product
