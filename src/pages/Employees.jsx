import React from "react";
import Navbar from "../components/Navbar";
import Overview from "../components/Overview";
import { TbSearch } from "react-icons/tb";

import Wrapper from "../HOC/Wrapper";
import EmployeesList from "../components/EmployeesList";
import { useDispatch, useSelector } from "react-redux";
import { toggleEmployeesTab } from "../redux/slices/tabs";

const Employees = () => {
  const { employeesTab } = useSelector((state) => state.tabsReducer);
  const dispatch = useDispatch();

  const toggleTab = (tab) => {
    dispatch(toggleEmployeesTab(tab));
  };
  return (
    <Wrapper>
      <div className="w-[60%] mx-5 mt-5">
        <Navbar navbar="Employees" />
        <div className="relative mb-10">
          <input type="text" placeholder="Search for employees" className="border border-[#8E8E8E] w-full h-12 rounded-lg p-4" />
          <TbSearch className="absolute top-3 right-4 text-xl" />
        </div>
        <div className="flex justify-end mb-5">
          <button className="text-orange text-base font-bold border-2 border-orange rounded-full p-2 hover:bg-orange hover:text-white">
            + Add Employee
          </button>
        </div>
        <div className="flex text-base font-bold text-[#8E8E8E] mb-10">
          <p className={`mr-10 cursor-pointer ${employeesTab === "all" && "text-orange underline"}`} onClick={() => toggleTab("all")}>
            All
          </p>
          <p className={`mr-10 cursor-pointer ${employeesTab === "pending" && "text-orange underline"}`} onClick={() => toggleTab("pending")}>
            Pending
          </p>

          <p className={`mr-10 cursor-pointer ${employeesTab === "engineering" && "text-orange underline"}`} onClick={() => toggleTab("engineering")}>
            Engineering
          </p>
          <p className={`mr-10 cursor-pointer ${employeesTab === "product" && "text-orange underline"}`} onClick={() => toggleTab("product")}>
            Product
          </p>
          <p className={`mr-10 cursor-pointer ${employeesTab === "marketing" && "text-orange underline"}`} onClick={() => toggleTab("marketing")}>
            Marketing
          </p>
          <p className={`mr-10 cursor-pointer ${employeesTab === "design" && "text-orange underline"}`} onClick={() => toggleTab("design")}>
            Design
          </p>
        </div>
        <EmployeesList />
      </div>
      <div className="w-[20%] mr-10 ml-5">
        <Overview />
      </div>
    </Wrapper>
  );
};

export default Employees;
