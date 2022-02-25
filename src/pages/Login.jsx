const Login = () => {
	return (
		<main class='login-container'>
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
				<button>Submit</button>
			</form>
		</main>
	)
}

export default Login
