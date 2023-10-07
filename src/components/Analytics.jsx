import React from "react";
import laptop from "../assets/laptop.png";

const Analytics = () => {
  return (
    <div className="w-full  bg-white py-16 px-4  ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img className="w-[200px] md:w-[300px] sm:w-[200px] mx-auto my-4" src={laptop} alt="" />
      <div className="flex  flex-col  justify-center ">
        <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data analytics centrally</h1>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit ipsum, ratione voluptate omnis quasi ea harum
          perferendis deleniti sed atque?
              </p>
              <button className="px-8 text-white mt-2 py-2 bg-green-600 font-medium mx-auto  text-start rounded inline-block">Get started</button>
        </div>
      </div>
        
    </div>
  );
};

export default Analytics;
