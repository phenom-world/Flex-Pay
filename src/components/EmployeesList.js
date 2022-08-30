import React from "react";
import Image2 from "../assets/image2.png";
import Image4 from "../assets/image4.png";

const EmployeesList = () => {
  return (
    <div>
      <div className="flex justify-between items-center border-2 border-[rgba(106, 102, 102, 0.51)] rounded-lg p-4 mb-7">
        <div className="flex items-center">
          <img src={Image2} alt="" />
          <div className="ml-5">
            <p className="text-base font-bold">Ubaydah Abdulwasiu</p>
            <p className="text-sm font-thin">Senior Backend engineer</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-thin">Salary</p>
          <p className="text-base font-bold">$400,000</p>
        </div>
        <button className="py-2 px-4 bg-orange text-white font-bold text-base rounded-lg hover:border-2 hover:border-orange hover:bg-white hover:text-orange">
          view account
        </button>
      </div>
      <div className="flex justify-between items-center border-2 border-[rgba(106, 102, 102, 0.51)] rounded-lg p-4 mb-7">
        <div className="flex items-center">
          <img src={Image4} alt="" />
          <div className="ml-5">
            <p className="text-base font-bold">Wakeel Kehinde</p>
            <p className="text-sm font-thin">Senior Frontend Engineer</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-thin">Salary</p>
          <p className="text-base font-bold">$300,000</p>
        </div>
        <button className="py-2 px-4 bg-orange text-white font-bold text-base rounded-lg hover:border-2 hover:border-orange hover:bg-white hover:text-orange">
          view account
        </button>
      </div>
      <div className="flex justify-between items-center border-2 border-[rgba(106, 102, 102, 0.51)] rounded-lg p-4 mb-7">
        <div className="flex items-center">
          <img src={Image2} alt="" />
          <div className="ml-5">
            <p className="text-base font-bold">Ubaydah Abdulwasiu</p>
            <p className="text-sm font-thin">Senior Backend engineer</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-thin">Salary</p>
          <p className="text-base font-bold">$400,000</p>
        </div>
        <button className="py-2 px-4 bg-orange text-white font-bold text-base rounded-lg hover:border-2 hover:border-orange hover:bg-white hover:text-orange">
          view account
        </button>
      </div>
      <div className="flex justify-between items-center border-2 border-[rgba(106, 102, 102, 0.51)] rounded-lg p-4 mb-7">
        <div className="flex items-center">
          <img src={Image4} alt="" />
          <div className="ml-5">
            <p className="text-base font-bold">Wakeel Kehinde</p>
            <p className="text-sm font-thin">Senior Frontend Engineer</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-thin">Salary</p>
          <p className="text-base font-bold">$300,000</p>
        </div>
        <button className="py-2 px-4 bg-orange text-white font-bold text-base rounded-lg hover:border-2 hover:border-orange hover:bg-white hover:text-orange">
          view account
        </button>
      </div>
      <div className="flex justify-between items-center border-2 border-[rgba(106, 102, 102, 0.51)] rounded-lg p-4 mb-7">
        <div className="flex items-center">
          <img src={Image2} alt="" />
          <div className="ml-5">
            <p className="text-base font-bold">Ubaydah Abdulwasiu</p>
            <p className="text-sm font-thin">Senior Backend engineer</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-thin">Salary</p>
          <p className="text-base font-bold">$400,000</p>
        </div>
        <button className="py-2 px-4 bg-orange text-white font-bold text-base rounded-lg hover:border-2 hover:border-orange hover:bg-white hover:text-orange">
          view account
        </button>
      </div>
      <div className="flex justify-between items-center border-2 border-[rgba(106, 102, 102, 0.51)] rounded-lg p-4 mb-16">
        <div className="flex items-center">
          <img src={Image4} alt="" />
          <div className="ml-5">
            <p className="text-base font-bold">Wakeel Kehinde</p>
            <p className="text-sm font-thin">Senior Frontend Engineer</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-thin">Salary</p>
          <p className="text-base font-bold">$300,000</p>
        </div>
        <button className="py-2 px-4 bg-orange text-white font-bold text-base rounded-lg hover:border-2 hover:border-orange hover:bg-white hover:text-orange">
          view account
        </button>
      </div>
    </div>
  );
};

export default EmployeesList;
