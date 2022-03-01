import { motion } from 'framer-motion'
import { animation } from '../animations/animations'
import Card from '../components/Card'

const Payments = () => {
	return (
		<motion.div
			className='container payment'
			variants={animation}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			<div className='heading'>
				<h2>Payments</h2>
				<p>Choose your payment type</p>
			</div>
			<Card content={['Domestic Payments']} route='/transact' />
			<Card content={['Inter Account Transfer']} />
			<Card content={['International Payments']} />
		</motion.div>
	)
}

export default Payments
