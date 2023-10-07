import React from 'react'
import user from '../assets/img.webp'
const UserProfile = ({toggle}) => {
  return (
      <div className={`flex gap-5 items-center ${toggle ? 'bg-none transition-all  duration-300 delay-200':'bg-white rounded-xl p-2 '}`}>
          <div className="min-w-[3.5rem]">
               <img src={user} alt="" className='w-16 h-full rounded-full object-cover' />
          </div>
          <div className={toggle? 'opacity-0 delay-200':''}>
              <h3 className="text-xl font-bold ">Xurshidbek Gulomov</h3>
              <span className="text-[.75rem] w-full opacity-60">Gulomov@gmail.com</span>
          </div>
    </div>
  )
}

export default UserProfile