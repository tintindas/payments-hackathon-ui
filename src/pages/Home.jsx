import { motion } from 'framer-motion'
import { animation } from '../animations/animations'
import Card from '../components/Card'

const Home = () => {
	return (
		<motion.div
			className='container'
			variants={animation}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			<div class='heading'>
				<h2>Home</h2>
				<p>All your financial needs in one place</p>
			</div>
			<Card content={['Payments']} route='/payments' />
			<Card content={['Preferences']} />
			<Card content={['Administration']} />
			<Card content={['Account Information']} />
		</motion.div>
	)
}

export default Home
