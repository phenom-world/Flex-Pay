import React from "react";
import DashBalance from "../components/DashBalance";
import Navbar from "../components/Navbar";
import Overview from "../components/Overview";
import Transcation from "../components/Transcation";
import Wrapper from "../HOC/Wrapper";

const Wallet = () => {
  return (
    <Wrapper>
      <div className="w-[60%] mx-5 mt-5">
        <Navbar navbar="Wallet" />
        <DashBalance />
        <div>
          <div className="flex justify-between items-center mb-5">
            <p className="flex text-2xl font-extrabold">Recent Transactions</p>
            <p className="flex text-base font-semibold">View more</p>
          </div>
          <Transcation />
        </div>
      </div>
      <div className="w-[20%] mr-10 ml-5">
        <Overview />
      </div>
    </Wrapper>
  );
};

export default Wallet;
