import React from "react";
import { BiTransfer, BiDotsHorizontalRounded } from "react-icons/bi";
import Vector from "../assets/Vector.png"

const Transcation = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <div className="flex">
          <div className=" bg-black h-14 w-14 mr-3 flex justify-center items-center">
            <BiTransfer className=" text-3xl text-white text-center" />
          </div>
          <div className="flex justify-between flex-col">
            <p className="text-xl font-extrabold mb-3">Salary Payment</p>
            <p className="text-sm">to Employee salary</p>
          </div>
        </div>
        <div>
          <p className="text-xl font-extrabold mb-3">-N25,000.00</p>
          <p className="text-sm text-end">5 hour ago</p>
        </div>
      </div>
      <div className="flex justify-between mb-5">
        <div className="flex">
          <div className=" bg-black h-14 w-14 mr-3 flex justify-center items-center">
            <BiTransfer className=" text-3xl text-white text-center" />
          </div>
          <div className="flex justify-between flex-col">
            <p className="text-xl font-extrabold mb-3">Fund  Wallet</p>
            <p className="text-sm">By card</p>
          </div>
        </div>
        <div>
          <p className="text-xl font-extrabold mb-3">-N20,000.00</p>
          <p className="text-sm text-end">5 hour ago</p>
        </div>
      </div>
      <div className="flex justify-between mb-5">
        <div className="flex">
          <div className=" bg-black h-14 w-14 mr-3 flex justify-center items-center">
            <img src={Vector} alt="" />
          </div>
          <div className="flex justify-between flex-col">
            <p className="text-xl font-extrabold mb-3">Withdraw</p>
            <p className="text-sm">To your local bank</p>
          </div>
        </div>
        <div>
          <p className="text-xl font-extrabold mb-3">-N20,000.00</p>
          <p className="text-sm text-end">5 hour ago</p>
        </div>
      </div>
      <div className="flex justify-between mb-5">
        <div className="flex">
          <div className=" bg-black h-14 w-14 mr-3 flex justify-center items-center">
          <img src={Vector} alt="" />
          </div>
          <div className="flex justify-between flex-col">
            <p className="text-xl font-extrabold mb-3">Withdraw</p>
            <p className="text-sm">To your local bank</p>
          </div>
        </div>
        <div>
          <p className="text-xl font-extrabold mb-3">-N20,000.00</p>
          <p className="text-sm text-end">5 hour ago</p>
        </div>
      </div>
      <div className="flex justify-between mb-5">
        <div className="flex">
          <div className=" bg-black h-14 w-14 mr-3 flex justify-center items-center">
            <BiDotsHorizontalRounded className=" text-3xl text-white text-center" />
          </div>
          <div className="flex justify-between flex-col">
            <p className="text-xl font-extrabold mb-3">Electrical Bill</p>
            <p className="text-sm">PHCN</p>
          </div>
        </div>
        <div>
          <p className="text-xl font-extrabold mb-3">-N12,000.00</p>
          <p className="text-sm text-end">20th March 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Transcation;
