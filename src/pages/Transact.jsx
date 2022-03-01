import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

const cardVariant = {
	hover: {
		scale: 1.05,
		boxShadow: '0 0 20px rgba(0, 0, 0, 0.226)'
	}
}

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
			<motion.div className='card' whileHover='hover' variants={cardVariant}>
				<p data-tip='hello'>Standard</p>
				<p data-tip='carbon'>{`${footprint[0]}g CO₂`}</p>
				<ReactTooltip />
			</motion.div>
			<details>
				<summary>Other payment methods</summary>
				<motion.div className='card' whileHover='hover' variants={cardVariant}>
					<p data-tip='hello 2'>CHAPS</p>
					<p data-tip='carbon 2'>{`${footprint[1]}g CO₂`}</p>
				</motion.div>
			</details>

			<div className='last'>
				Learn more about our climate goals <Link to='/carbon'>here</Link>
			</div>
		</div>
	)
}

export default Transact
