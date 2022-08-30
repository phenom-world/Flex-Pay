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
              <div className="flex items-center">
                <img src={Image4} alt="" />
                <div className="ml-5">
                  <p className="text-base font-bold">{employee?.name}</p>
                  <p className="text-sm font-thin">{employee?.department}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-thin">Salary</p>
                <p className="text-base font-bold">${employee?.salary}</p>
              </div>
              <button className="py-2 px-4 bg-orange text-white font-bold text-base rounded-lg hover:border-2 hover:border-orange hover:bg-white hover:text-orange">
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
