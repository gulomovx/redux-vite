import React from 'react'
import { useSelector } from 'react-redux'
const Navbar = () => {
       const {amount}=useSelector((state)=> state.basket)
  return (
      <div className='flex justify-between pt-8'>
          <p className='font-medium'>Home</p>
          <p className='font-medium'>Basket <span className='bg-red-400 p-2  rounded-full w-4 h-4 text-white'>{amount}</span> </p>
    </div>
  )
}

export default Navbar