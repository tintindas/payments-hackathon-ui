import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import { animation } from '../animations/animations'

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
		<motion.div
			className='container transact'
			variants={animation}
			initial='initial'
			animate='animate'
			exit='exit'
		>
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
				<p data-tip='Use Standard to set up immediate, next day and future dated Faster Payments'>
					Standard
				</p>
				<p data-tip='Carbon footprint for this transaction'>{`${footprint[0]}g CO₂`}</p>
				<ReactTooltip />
			</motion.div>
			<details>
				<summary>Other payment methods</summary>
				<motion.div className='card' whileHover='hover' variants={cardVariant}>
					<p data-tip='Use CHAPS to set up same day, high value sterling payments'>
						CHAPS
					</p>
					<p data-tip='Carbon footprint for this transaction'>{`${footprint[1]}g CO₂`}</p>
				</motion.div>
			</details>

			<div className='last'>
				Learn more about our climate efforts <Link to='/carbon'>here</Link>.
			</div>
		</motion.div>
	)
}

export default Transact
