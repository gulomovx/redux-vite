import React from 'react'

const Product = ({name, amount, image, price,  }) => {
  return (
      <div className='flex justify-between mt-4 '>
          <div className='flex gap-[50%] items-center '>
          <img src={image} alt="" className='w-40 ' />
          <div className='text-2xl'>
              <p>{name}</p>
              <p>{price}</p>
              <button className='bg-red-500 text-white px-2 rounded'>Remove</button>
          </div>
          </div>
          <div className='text-2xl cursor-pointer'>
              <button>-</button>
              <p> {amount}</p>
              <button>+</button>
          </div>
    </div>
  )
}

export default Product