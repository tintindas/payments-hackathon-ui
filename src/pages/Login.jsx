import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { animation } from '../animations/animations'

const btnVariant = {
	hover: {
		scale: 1.05,
		boxShadow: '0 0 20px rgba(0, 0, 0, 0.89)'
	}
}

const Login = () => {
	const navigate = useNavigate()
	return (
		<motion.main
			className='login-container'
			variants={animation}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			<h2>Login</h2>
			<form>
				<fieldset>
					<label>
						<p>User ID</p>
						<input type='text' name='user' id='user' />
					</label>
					<label>
						<p>Password</p>
						<input type='password' name='password' id='password' />
					</label>
				</fieldset>
				<motion.button
					variants={btnVariant}
					whileHover='hover'
					className='btn'
					onClick={() => {
						navigate('/home')
					}}
				>
					Submit
				</motion.button>
			</form>
		</motion.main>
	)
}

export default Login
