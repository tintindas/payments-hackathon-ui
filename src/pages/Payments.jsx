import Card from '../components/Card'

const Payments = () => {
	return (
		<div className='container payment'>
			<h2>Payment</h2>
			<form>
				<label>
					<p>Amount:</p>
					<input type='number' />
				</label>
			</form>
			<Card content={['Standard', '3g CO₂']} />
			<Card content={['Immediate', '5g CO₂']} />
			<Card content={['International', '12g CO₂']} />
		</div>
	)
}

export default Payments
