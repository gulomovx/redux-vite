import { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }


  return (
      <div className=' text-white flex h-24 max-w-[1240px] mx-auto px-4 items-center justify-between w-full '>
          <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React</h1>
          <ul className=' hidden md:flex'>
              <li className='p-4'>Home</li>
              <li className='p-4'>Company</li>
              <li className='p-4'>Recources</li>
              <li className='p-4'>About</li>
              <li className='p-4'>Contact</li>
          </ul>
          <div onClick={handleNav} className='block md:hidden '>
              {!nav ? <AiOutlineClose size={20} /> :
              <AiOutlineMenu size={20} />
                  
              }
          </div>

          <div className={!nav? '  md:flex fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-[#000300] ease-in-out   duration-500' : 'fixed left-[-100%]'}>
          <h1 className='m-8 w-full text-3xl font-bold text-[#00df9a]'>React</h1>

              <ul className='p-4 uppercase'>
              <li className='p-4 border-b border-gray-600'>Home</li>
              <li className='p-4 border-b border-gray-600'>Company</li>
              <li className='p-4 border-b border-gray-600'>Recources</li>
              <li className='p-4 border-b border-gray-600'>About</li>
              <li className='p-4'>Contact</li>
              </ul> 
          </div>
    </div>
  )
}

export default Navbar