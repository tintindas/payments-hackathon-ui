import Card from '../components/Card'

const Transact = () => {
	return (
		<div className='container transact'>
			<div className='heading'>
				<h2>Transact</h2>
				<p>Choose your transaction type</p>
			</div>
			<form>
				<label>
					<p>Account Number:</p>
					<input type='text' />
				</label>
				<label>
					<p>Amount:</p>
					<input type='number' />
				</label>
			</form>
			<Card content={['Standard', '3g CO₂']} />
			<Card content={['CHAPS', '5g CO₂']} />
		</div>
	)
}

export default Transact
