import React from 'react'
import BasketProducts from './components/BasketProducts'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='max-w-screen-lg mx-auto px-3'>
      <Navbar/>
      <h1 className='text-center mt-5 py-3 text-5xl text-blue-500'> Redux Store ✔</h1>
      <BasketProducts/> 
    </div>
  )
}

export default App