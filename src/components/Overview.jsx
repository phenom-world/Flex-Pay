import React from "react";
import Ellipse1 from "../assets/Ellipse 10.png";
import Ellipse2 from "../assets/Ellipse 11.png";

const Overview = ({ trans }) => {
  return (
    <div className="border-4 border-[#EDEDFE] rounded-lg py-5 px-5 my-5">
      <div className="flex justify-between items-center mb-7">
        <p className="font-bold text-xl">Overview</p>
        <select className="bg-[#D9D9D9] p-1 rounded-lg text-sm font-bold opacity-60">
          <option>APY Interest</option>
        </select>
      </div>
      <div className="flex justify-center">
        <div className="relative">
          <div className="relative">
            <img src={Ellipse1} alt="" className={trans ? "w-80" : "w-full"} />
            <img
              src={Ellipse2}
              alt=""
              className={
                trans
                  ? "absolute bottom-0 left-14 w-28"
                  : "absolute bottom-0 left-7"
              }
            />
          </div>
          <p className={ trans ?"absolute text-xl font-bold top-[45%] left-[43%]" : "absolute text-xl font-bold top-[45%] left-[35%] "}>
            10.2%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
