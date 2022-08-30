import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Overview from "../components/Overview";
import Transcation from "../components/Transcation";
import Wrapper from "../HOC/Wrapper";
import { toggleTxnsTab } from "../redux/slices/tabs";

const Transactions = () => {
  const { transactionsTab } = useSelector((state) => state.tabsReducer);
  const dispatch = useDispatch();

  const toggleTab = (tab) => {
    dispatch(toggleTxnsTab(tab));
  };
  return (
    <Wrapper>
      <div className="w-[60%] mx-5 mt-5">
        <Navbar navbar="Transaction" />
        <div className="flex text-base font-bold text-[#8E8E8E] mb-10">
          <p className={`mr-10 cursor-pointer ${transactionsTab === "all" && "text-orange underline"}`} onClick={() => toggleTab("all")}>
            All
          </p>
          <p className={`mr-10 cursor-pointer ${transactionsTab === "pending" && "text-orange underline"}`} onClick={() => toggleTab("pending")}>
            Pending
          </p>
          <p className={`mr-10 cursor-pointer ${transactionsTab === "completed" && "text-orange underline"}`} onClick={() => toggleTab("completed")}>
            Completed
          </p>
          <p className={`mr-10 cursor-pointer ${transactionsTab === "cancelled" && "text-orange underline"}`} onClick={() => toggleTab("cancelled")}>
            Cancelled
          </p>
          <p className={`mr-10 cursor-pointer ${transactionsTab === "scheduled" && "text-orange underline"}`} onClick={() => toggleTab("scheduled")}>
            Scheduled
          </p>
        </div>
        <Transcation />
      </div>
      <div className="w-[20%] mr-10 ml-5">
        <Overview />
      </div>
    </Wrapper>
  );
};

export default Transactions;
