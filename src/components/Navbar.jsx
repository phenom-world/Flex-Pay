import React from "react";
import { MdNotifications } from "react-icons/md";
import Image03 from "../assets/profile.png";

const Navbar = ({ navbar }) => {
  return (
    <div className=" flex justify-between items-center mb-5 mr-5">
        {navbar === "Dashboard" ? (
          <div>
            <p className="font-semibold text-sm">Hello,</p>
            <p className="font-extrabold text-sm">OvalFi HR Admin</p>{" "}
          </div>
        ) : (
          <p className="text-2xl font-extrabold">{navbar}</p>
        )}
      <div className="flex items-center">
        <MdNotifications className="mr-10 text-3xl " />
        <img src={Image03} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
