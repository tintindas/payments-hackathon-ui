import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Payments from './pages/Payments'
import Transact from './pages/Transact'

const App = () => {
	const location = useLocation()
	return (
		<div className='App'>
			<Navbar />
			<AnimatePresence exitBeforeEnter>
				<Routes location={location} key={location.key}>
					<Route path='/' element={<Login />} />
					<Route path='/home' element={<Home />} />
					<Route path='/payments' element={<Payments />} />
					<Route path='/transact' element={<Transact />} />
				</Routes>
			</AnimatePresence>
			<Footer />
		</div>
	)
}

export default App
