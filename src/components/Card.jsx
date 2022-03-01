import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { animation } from '../animations/animations'

const cardVariant = {
	...animation,
	hover: {
		scale: 1.05,
		boxShadow: '0 0 20px rgba(0, 0, 0, 0.226)'
	}
}

const Card = ({ content, route }) => {
	const navigate = useNavigate()

	const handleClick = () => {
		if (route) {
			navigate(route)
		}
	}

	return (
		<motion.div
			className='card'
			onClick={handleClick}
			whileHover='hover'
			initial='initial'
			animate='animate'
			exit='exit'
			variants={cardVariant}
		>
			{content.map((item, index) => {
				return <p key={index}>{item}</p>
			})}
		</motion.div>
	)
}

export default Card
