import Card from '../components/Card'

const Home = () => {
	return (
		<div className='container'>
			<div class='heading'>
				<h2>Home</h2>
				<p>All your financial needs in one place</p>
			</div>
			<Card content={['Payments']} route='/payments' />
			<Card content={['Preferences']} />
			<Card content={['Administration']} />
			<Card content={['Account Information']} />
		</div>
	)
}

export default Home
