import React from 'react'
import Analytics from './components/Analytics'
import Cards from './components/Cards'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import NewsLetter from './components/NewsLetter'

const App = () => {
  return (
    <div className='bg-black h-screen'>
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Cards/>
    </div>
  )
}

export default App