import single from '../assets/promotion.png'
import promote from '../assets/motivation.png'
import person from '../assets/chart-up.png'
const Cards = () => {
  return (
      <div className='w-full py-[10rem] px-4 bg-gradient-to-r from-blue-400 to-emerald-400'>
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
              <div className="w-full border-red-800 rounded-lg p-4 my-4 shadow-2xl hover:scale-105 duration-300 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
                  <img className='w-16   mx-auto mt-[-4rem] ' src={single} alt="" />
                  <h1 className='text-2xl font-bold text-center py-y '>Single user</h1>
                  <p className='text-center text-4xl font-bold'>$120</p>
                  <div className="text-center font-medium">
                      <p>500 BG storage</p>
                      <p>1 Grant user</p>
                      <p>Send up to 2 GB</p>
                  </div>
                  <button className='bg-blue-300 w-[150px] rounded-lg font-medium my-6 mx-auto px-6 py-3 block'>Start trial</button>
              </div>
              <div className="w-full  rounded-lg p-4 my-4 shadow-2xl hover:scale-105 duration-300 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
                  <img className='w-16   mx-auto mt-[-4rem] ' src={promote} alt="" />
                  <h1 className='text-2xl font-bold text-center py-y'>Single user</h1>
                  <p className='text-center text-4xl font-bold'>$120</p>
                  <div className="text-center font-medium">
                      <p>500 BG storage</p>
                      <p>1 Grant user</p>
                      <p>Send up to 2 GB</p>
                  </div>
                  <button className='bg-blue-300 w-[150px] rounded-md font-medium my-6 mx-auto px-6 py-3 block'>Start trial</button>
              </div>
              <div className="w-full  rounded-lg p-4 my-4 shadow-2xl hover:scale-105 duration-300 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
                  <img className='w-16   mx-auto mt-[-4rem] ' src={person} alt="" />
                  <h1 className='text-2xl font-bold text-center py-y'>Single user</h1>
                  <p className='text-center text-4xl font-bold'>$120</p>
                  <div className="text-center font-medium">
                      <p>500 BG storage</p>
                      <p>1 Grant user</p>
                      <p>Send up to 2 GB</p>
                  </div>
                  <button className='bg-blue-300 w-[150px] rounded-md font-medium my-6 mx-auto px-6 py-3 block'>Start trial</button>
              </div>



              
          </div>
    </div>
  )
}

export default Cards