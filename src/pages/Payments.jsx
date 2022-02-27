import Card from '../components/Card'

const Payments = () => {
	return (
		<div className='container payment'>
			<div className='heading'>
				<h2>Payments</h2>
				<p>Choose your payment channel</p>
			</div>
			<Card content={['Domestic Payments']} route='/transact' />
			<Card content={['Inter Account Transfer']} />
			<Card content={['International Payments']} />
		</div>
	)
}

export default Payments
