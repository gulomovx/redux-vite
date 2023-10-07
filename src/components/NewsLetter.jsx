import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full  bg-black py-32  text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 items-center">
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-blue-800 md:text-4xl font-bold">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="text-xl font-medium mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            neque.
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between  w-full">
            <input className="rounded-md p-3 flex w-full text-black" type="email" placeholder="Enter email" />
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">Notify me</button>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, qui.</p>
        </div>

        {/* <div className="w-full ">
          <div action="" className="md:flex md:items-center flex items-center w-full ">
            <input
              className="rounded-md px-4 py-2 mt-4 sm:w-[700px] text-slate-800 capitalize md:w-[400px]"
              type="text"
              placeholder="Enter your email "
            />
            <button className="bg-green-400 px-8 py-2  ml-2 text-black font-medium  ">
              Notify
            </button>
          </div>
          <p className="mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default NewsLetter;
