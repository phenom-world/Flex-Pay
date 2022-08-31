import React from "react";
import Image4 from "../assets/image4.png";
import { useGetEmployeesQuery } from "../redux/services";
import Loading from "./Loading";
import EmptySearch from "./Empty/EmptySearch";
import Pagination from "./Pagination";

const EmployeesList = ({ query, setQuery, data }) => {
  const { isFetching } = useGetEmployeesQuery();

  if (isFetching && query.search_query === "") {
    return <Loading />;
  }
  return (
    <div>
      {data?.data?.length === 0 && !query.search_query !== "" ? (
        <EmptySearch content={"employees"} />
      ) : (
        <>
          {data?.data.map((employee) => (
            <div className="flex justify-between items-center border-2 border-[rgba(106, 102, 102, 0.51)] rounded-lg p-4 mb-7">
              <div className="flex items-start sm:items-center sm:w-auto w-full">
                <img src={Image4} alt="" />
                <div className="ml-5 w-full ">
                  <p className="text-[16px] font-bold">{employee?.name}asasas</p>
                  <p className="text-sm font-thin">{employee?.department}asasas</p>
                  <div className="sm:hidden flex  items-end justify-between w-full">
                    <div>
                      <p className="text-sm font-thin mt-3">Salary</p>
                      <p className="text-[16px] font-bold">${employee?.salary}sasasa</p>
                    </div>
                    <button className="px-2 py-2 rounded-xl bg-orange text-white font-bold text-base  hover:border-2 hover:border-orange hover:bg-white hover:text-orange">
                      view account
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-thin">Salary</p>
                <p className="text-base font-bold">${employee?.salary}sasasa</p>
              </div>
              <button className=" hidden sm:block py-2 px-4 bg-orange text-white font-bold text-base rounded-lg hover:border-2 hover:border-orange hover:bg-white hover:text-orange">
                view account
              </button>
            </div>
          ))}
          {data?.data.length > 10 && <Pagination query={query} setQuery={setQuery} data={data?.data} count={data?.count} />}
        </>
      )}
    </div>
  );
};

export default EmployeesList;
