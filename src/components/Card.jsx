import { useNavigate } from 'react-router-dom'

const Card = ({ content, route }) => {
	const navigate = useNavigate()

	const handleClick = () => {
		if (route) {
			navigate(route)
		}
	}

	return (
		<div className='card' onClick={handleClick}>
			{content.map((item, index) => {
				return <p key={index}>{item}</p>
			})}
		</div>
	)
}

export default Card
