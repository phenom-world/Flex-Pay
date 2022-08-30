import React from "react";
import { MdDashboard, MdSettings } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { BsFillBarChartLineFill, BsPeopleFill, BsArrowRightShort } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = async () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div className="w-[20%] h-screen bg-[#030729] flex flex-col justify-between pb-10 sticky top-0 overflow-hidden">
      <div>
        <p className="ml-12 py-7 text-xl text-white font-semibold">Flexpay</p>
        <div className="ml-10 w-full">
          <Link to="/dashboard">
            <div
              className={`flex items-center text-white text-lg mb-7 font-semibold px-5 cursor-pointer py-3 ${
                location.pathname === "/dashboard" && "text-center rounded-lg text-flex-purple bg-white w-[80%]"
              }`}
            >
              <MdDashboard className="text-3xl mr-7" />
              <p>Dashboard</p>
            </div>
          </Link>
          <Link to="/wallet">
            <div
              className={`flex items-center text-white text-lg mb-7 font-semibold px-5 cursor-pointer py-3  ${
                location.pathname === "/wallet" && "text-center rounded-lg text-flex-purple bg-white w-[80%]"
              }`}
            >
              <FaWallet className="text-3xl mr-7" />
              <p>Wallet</p>
            </div>
          </Link>
          <Link to="/employees">
            <div
              className={`flex items-center text-white text-lg mb-7 font-semibold px-5 cursor-pointer py-3  ${
                location.pathname === "/employees" && "text-center rounded-lg text-flex-purple bg-white w-[80%]"
              }`}
            >
              <BsPeopleFill className="text-3xl mr-7" />
              <p>Employees</p>
            </div>
          </Link>
          <Link to="/transactions">
            <div
              className={`flex items-center text-white text-lg mb-7 font-semibold px-5 cursor-pointer py-3  ${
                location.pathname === "/transactions" && "text-center rounded-lg text-flex-purple bg-white w-[80%]"
              }`}
            >
              <BiTransfer className="text-3xl mr-7" />
              <p>Transaction</p>
            </div>
          </Link>
          <Link to="/statistics">
            <div
              className={`flex items-center text-white text-lg mb-7 font-semibold px-5 cursor-pointer py-3  ${
                location.pathname === "/statistics" && "text-black text-center rounded-lg text-flex-purple bg-white w-[80%]"
              }`}
            >
              <BsFillBarChartLineFill className="text-3xl mr-7" />
              <p>Statistics</p>
            </div>
          </Link>
          <Link to="/settings">
            <div
              className={`flex items-center text-white text-lg mb-7 font-semibold px-5 cursor-pointer py-3  ${
                location.pathname === "/settings" && "text-center rounded-lg text-flex-purple bg-white w-[80%]"
              }`}
            >
              <MdSettings className="text-3xl mr-7" />
              <p>Settings</p>
            </div>
          </Link>
        </div>
      </div>
      <div className=" flex items-center text-lg  ml-10 px-5 font-semibold cursor-pointer" onClick={handleLogout}>
        <BsArrowRightShort className="text-3xl mr-7 bg-white text-flex-purple" />
        <p className="text-white">Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
