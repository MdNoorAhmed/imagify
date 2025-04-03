import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Home from './pages/Home'
import Result  from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LogIn from './components/LogIn'
import { AppContext } from './context/AppContext'

const App = () => {


 const {showLogin} = useContext(AppContext)
  return (
// In App.jsx
<div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen flex flex-col bg-gradient-to-b from-teal-50 to-orange-50'>
<ToastContainer position='botto-right'/>
  <Navbar />
  {showLogin && <LogIn/>}
  <main className='flex-1'>  {/* ← Critical flex-grow */}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/result' element={<Result />} />
      <Route path='/buy' element={<BuyCredit />} />
    </Routes>
  </main>
  <Footer />
</div>
  )
}

export default App
