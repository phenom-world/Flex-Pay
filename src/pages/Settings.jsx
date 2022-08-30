import React from "react";
import Navbar from "../components/Navbar";
import { GoNote } from "react-icons/go";
import { BiUserCircle } from "react-icons/bi";
import Profile from "../assets/profile2.png";
import Visa from "../assets/image 13.png";
import Wrapper from "../HOC/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { toggleSettingsTab } from "../redux/slices/tabs";

const Settings = () => {
  const { settingsTab } = useSelector((state) => state.tabsReducer);
  const dispatch = useDispatch();

  const toggleTab = (tab) => {
    dispatch(toggleSettingsTab(tab));
  };
  return (
    <Wrapper>
      <div className="w-[60%] mx-5 mt-5">
        <Navbar navbar="Settings" />
        <div className="shadow-3xl px-10 rounded-lg mt-20 pb-10">
          <div className="flex justify-between pt-5 mb-5">
            <div
              className={`flex items-center w-[50%] justify-center  cursor-pointer ${
                settingsTab === "personal" ? "text-orange border-b-2 pb-2 border-orange" : "text-[#ACB0B9] "
              }`}
              onClick={() => toggleTab("personal")}
            >
              <GoNote className="text-3xl font-semibold  mr-2" />
              <p className="text-base font-semibold ">Personal</p>
            </div>
            <div
              className={`flex items-center w-[50%] justify-center cursor-pointer  ${
                settingsTab === "account" ? "text-orange border-b-2 pb-2 border-orange" : "text-[#ACB0B9] "
              }`}
              onClick={() => toggleTab("account")}
            >
              <BiUserCircle className="text-3xl font-semibold mr-2" />
              <p className="text-base font-semibold">Account</p>
            </div>
          </div>
          <p className="mb-5 text-[#383B43] text-sm font-semibold">
            Company Name: <span className="text-[#959BA7] ml-3">Jumoke</span>
          </p>
          <p className="mb-5 text-[#383B43] text-sm font-semibold">
            Last Name: <span className="text-[#959BA7] ml-3">Onakoya</span>
          </p>
          <div className="flex justify-between mb-5">
            <p className="text-[#383B43] text-sm font-semibold">
              Email Address: <span className="text-[#959BA7] ml-3">jumokeonakoya@gmail.com</span>
            </p>
            <p className="cursor-pointer text-orange text-sm font-semibold">Edit</p>
          </div>
          <div className="flex justify-between  mb-5">
            <p className="text-[#383B43] text-sm font-semibold">
              Phone Number: <span className="text-[#959BA7] ml-3">+234 (0) 807 909 7547</span>
            </p>
            <p className="cursor-pointer text-orange text-sm font-semibold">Edit</p>
          </div>
          <div className="flex justify-between  mb-5">
            <p className="text-[#383B43] text-sm font-semibold">
              Country: <span className="text-[#959BA7] ml-3">Nigeria</span>
            </p>
            <p className="cursor-pointer text-orange text-sm font-semibold">Edit</p>
          </div>

          <div>
            <p className="text-sm text-[#959BA7] font-semibold mb-5">Card Information</p>
            <div className="flex justify-between">
              <div className="w-[45%] bg-[#F8F8F9] p-3 rounded-lg">
                <img src={Visa} alt="" />
                <input type="text" placeholder="**** **** **** 8456" className="bg-[#F8F8F9] focus:outline-none w-full mt-2" />
              </div>
              <div className="w-[45%] bg-[#F8F8F9] p-3 rounded-lg">
                <img src={Visa} alt="" />
                <input type="text" placeholder="**** **** **** 8456" className="bg-[#F8F8F9] focus:outline-none w-full mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-36  w-[20%] mr-10">
        <div className="shadow-3xl flex flex-col items-center pb-40 rounded-lg">
          <img src={Profile} alt="" className="pt-5" />
          <p className="pt-5 text-lg font-extrabold text-[#383B43]">Ovalfi Admin</p>
          <p className="pt-3 text-sm font-semibold text-[#959BA7]">admin@ovalfi.com</p>
          <button className="mt-5 py-2 px-4 bg-orange text-white font-semibold text-sm rounded-lg hover:border-2 border-orange hover:bg-white hover:text-orange">
            Change Image
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Settings;
