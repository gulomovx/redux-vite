import React from 'react'
import {datas} from './Data'
const SidebarData = ({toggle}) => {
  return (
      <div className="">
          {datas.map((data) => {
              return (
                  <div className={`${toggle ? 'last:w-[3.6rem]':'last:w-[17rem]' } hover:scale-110 sidebar last:absolute left-4 bottom-4`} key={data.id}>
                      <div className="mr-8 text-[1.7rem] text-brown hover:scale-110">
                          {data.icon}
                      </div>
                      <div className={`${toggle ? 'opacity-0 delay-2 ' : ''} `}>
                          {data.text}
                      </div>
                  </div>
              )
          })}
    </div>
  )
}

export default SidebarData