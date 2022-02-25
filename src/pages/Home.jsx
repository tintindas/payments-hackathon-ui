import Card from '../components/Card'

const Home = () => {
	return (
		<div className='container'>
			<h2>Home</h2>
			<Card content={['Payments', 'Test']} />
			<Card content={['Payments', 'Test']} />
			<Card content={['Payments', 'Test']} />
			<Card content={['Payments', 'Test']} />
		</div>
	)
}

export default Home
