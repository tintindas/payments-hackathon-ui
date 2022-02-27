import Card from '../components/Card'

const Home = () => {
	return (
		<div className='container'>
			<h2>Home</h2>
			<Card content={['Payments']} route='/payments' />
			<Card content={['Payments']} />
			<Card content={['Payments']} />
			<Card content={['Payments']} />
		</div>
	)
}

export default Home
