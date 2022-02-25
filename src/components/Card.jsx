const Card = ({ content }) => {
	return (
		<div className='card'>
			{content.map((item, index) => {
				return <p key={index}>{item}</p>
			})}
		</div>
	)
}

export default Card
