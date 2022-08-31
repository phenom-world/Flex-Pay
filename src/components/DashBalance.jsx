import React from "react";

const DashBalance = () => {
  return (
    <div className="bg-orange rounded-xl mb-10">
      <div className="flex justify-end pt-5 px-4 md:px-10 ">
        <select className="bg-orange border py-2 px-2 border-white rounded-lg">
          <option>USD</option>
        </select>
      </div>
      <div className="flex justify-center items-center flex-col text-white font-extrabold mb-3">
        <p className="text-base">Wallet Balance</p>
        <p className="text-4xl">$ 1,270,000.00</p>
      </div>
      <div className="flex justify-center items-center pb-10 px-4 md:px-0">
        <button className="py-3 w-40 rounded-lg bg-white hover:bg-orange hover:border-2 hover:text-white hover:border-white font-bold">
          Withdraw
        </button>
        <button className="py-3  w-40 border-2 rounded-lg text-white border-white ml-5 hover:bg-white hover:text-black font-bold">Fund</button>
      </div>
    </div>
  );
};

export default DashBalance;
