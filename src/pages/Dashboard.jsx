import React from "react";
import Navbar from "../components/Navbar";
import DashBalance from "../components/DashBalance";
import Transcation from "../components/Transcation";
import Overview from "../components/Overview";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";
import Wrapper from "../HOC/Wrapper";

const Dashboard = () => {
  return (
    <Wrapper>
      <div className="w-[60%] mx-5 mt-5">
        <Navbar navbar="Dashboard" />
        <DashBalance />
        <div>
          <div className="flex justify-between items-center mb-5">
            <p className="flex text-2xl font-extrabold">Recent Transactions</p>
            <p className="flex text-base font-semibold">View more</p>
          </div>
          <Transcation />
        </div>
      </div>
      <div className="w-[20%] mr-10 ml-5 mt-5">
        <Overview />
        <div className="border-4 border-[#EDEDFE] rounded-lg pt-5 px-5 pb-8">
          <p className="text-xl font-extrabold mb-12">Employee Overview</p>
          <p className="text-sm font-semibold text-[ #171717] mb-2">Top Earning Employees</p>
          <div className="flex items-center mb-5">
            <img src={Image1} alt="" className="mr-2" />
            <img src={Image2} alt="" className="mr-2" />
            <img src={Image3} alt="" className="mr-2" />
            <img src={Image4} alt="" className="mr-2" />
          </div>
          <div className="mb-14">
            <input type="text" placeholder="Enter amount" className="border focus:outline-none border-[#8E8E8E] rounded-lg h-12 w-full px-2" />
          </div>
          <div className="flex justify-center">
            <button className="px-12 py-4 w-full bg-black text-white text-base font-bold hover:border-2 rounded-lg hover:text-black hover:bg-white">
              Transfer Fund
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
