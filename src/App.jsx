import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Payments from './pages/Payments'
import Transact from './pages/Transact'

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/home' element={<Home />} />
					<Route path='/payments' element={<Payments />} />
					<Route path='/transact' element={<Transact />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	)
}

export default App
