import { useEffect, useState } from 'react'
import Card from '../components/Card'

const Transact = () => {
	const [footprint, setFootprint] = useState([])
	useEffect(() => {
		const data = 0.4813126944
		const random = 1.68
		setFootprint([data.toFixed(2), (random * data).toFixed(2)])
	}, [])

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
			<div className='good'>
				<Card content={['Standard', `${footprint[0]}g CO₂`]} />
			</div>
			<details>
				<summary>Other payment methods</summary>
				<div className='good'>
					<Card content={['CHAPS', `${footprint[1]}g CO₂`]} />
				</div>
			</details>
		</div>
	)
}

export default Transact
