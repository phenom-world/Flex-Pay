import React, { useState } from "react";
import { MdDashboard, MdNotifications, MdSettings } from "react-icons/md";
import { BsArrowRightShort, BsFillBarChartLineFill, BsPeopleFill } from "react-icons/bs";
import Image03 from "../assets/profile.png";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaWallet } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { useDispatch } from "react-redux";

const Navbar = ({ navbar }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  return (
    <div className=" flex justify-between items-center mb-5 mr-5">
      <div className="flex relative sm:hidden">
        {toggleMenu ? (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        ) : (
          <HiMenuAlt4 fontSize={28} className="text-black md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed px-10 w-[100vw] sm:w-[300px] bg-[#030729] top-0 left-0 p-3 h-screen shadow-2xl md:hidden list-none flex flex-col justify-start
          text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2 cursor-pointer justify-end flex mt-5 mb-8">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["dashboard", "wallet", "employees", "transactions", "statistics", "settings"].map((item, index) => (
              <div key={item + index}>
                <Link to={"/" + item}>
                  <div
                    className={`flex items-center text-white text-lg mb-7 font-semibold px-5 cursor-pointer py-3 ${
                      location.pathname === "/" + item && "text-center rounded-lg text-flex-purple bg-white w-[80%]"
                    }`}
                    onClick={() => setToggleMenu(false)}
                  >
                    {item === "dashboard" ? (
                      <MdDashboard className="text-3xl mr-7" />
                    ) : item === "wallet" ? (
                      <FaWallet className="text-3xl mr-7" />
                    ) : item === "employees" ? (
                      <BsPeopleFill className="text-3xl mr-7" />
                    ) : item === "transactions" ? (
                      <BiTransfer className="text-3xl mr-7" />
                    ) : item === "statistics" ? (
                      <BsFillBarChartLineFill className="text-3xl mr-7" />
                    ) : (
                      <MdSettings className="text-3xl mr-7" />
                    )}
                    <p className="capitalize">{item}</p>
                  </div>
                </Link>
              </div>
            ))}
            <div className=" flex items-center text-lg px-5 font-semibold cursor-pointer" onClick={handleLogout}>
              <BsArrowRightShort className="text-3xl mr-7 bg-white text-flex-purple" />
              <p className="text-white">Logout</p>
            </div>{" "}
          </ul>
        )}
      </div>
      {navbar === "Dashboard" ? (
        <div className="hidden sm:block">
          <p className="font-semibold text-sm">Hello,</p>
          <p className="font-extrabold text-sm">OvalFi HR Admin</p>{" "}
        </div>
      ) : (
        <p className="text-2xl hidden sm:block font-extrabold">{navbar}</p>
      )}
      <div className="flex items-center gap-4">
        <MdNotifications className="text-3xl mr-7 " />
        <img src={Image03} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
