import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Overview from "../components/Overview";
import { TbSearch } from "react-icons/tb";

import Wrapper from "../HOC/Wrapper";
import EmployeesList from "../components/EmployeesList";
import XCancel from "../components/XCancel";
import { useDispatch, useSelector } from "react-redux";
import { toggleEmployeesTab } from "../redux/slices/tabs";
import Popup from "reactjs-popup";
import { ErrorMessage, Field, Formik } from "formik";
import { useAddEmployeeMutation, useGetEmployeesQuery } from "../redux/services";
import { toast } from "react-toastify";
import LoadingModal from "../components/LoadingModal";
import { closeModal, openModal } from "../redux/modal/modalRedux";
import { EmployeeSchema, initialEmployeeValues } from "../schemas/employee";
import EmptyFetch from "../components/Empty/EmptyFetch";

export const initialEmployeeQuery = {
  page: 1,
  limit: 10,
  department: "",
  search_query: "",
};
const Employees = () => {
  const { employeesTab } = useSelector((state) => state.tabsReducer);
  const dispatch = useDispatch();
  const [createEmployee, { isLoading, isSuccess, isError, error }] = useAddEmployeeMutation();
  const [query, setQuery] = useState(initialEmployeeQuery);
  const { data } = useGetEmployeesQuery(query);

  const toggleTab = (tab) => {
    dispatch(toggleEmployeesTab(tab));
  };

  const handleChange = (e) => {
    setQuery({ ...query, search_query: e.target.value, page: 1 });
  };

  const handleOnSubmit = (values, close) => {
    createEmployee({ ...values, salary: values.salary });
    close();
  };

  useEffect(() => {
    if (isLoading) {
      dispatch(openModal());
    }
    if (isSuccess) {
      toast.success("Employee added successfully");
      dispatch(closeModal());
    }
    if (isError && error && "status" in error) {
      toast.error(error?.data?.message);
      dispatch(closeModal());
    }
  }, [dispatch, isLoading, isError, error, isSuccess]);

  return (
    <Wrapper>
      <LoadingModal />
      <div className="w-[60%] mx-5 mt-5">
        <Navbar navbar="Employees" />
        <div className="relative mb-10">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search for employees"
            className="border border-[#8E8E8E] focus:outline-none w-full h-12 rounded-lg p-4"
          />
          <TbSearch className="absolute top-3 right-4 text-xl" />
        </div>
        <div className="flex justify-end mb-5">
          <Popup
            trigger={
              <button className="text-orange text-base font-bold border-2 border-orange rounded-full p-2 hover:bg-orange hover:text-white">
                + Add Employee
              </button>
            }
            position="right center"
            modal
            closeOnDocumentClick
            nested
            contentStyle={{
              borderRadius: "12px",
              width: "fit-content",
              backgroundColor: "white",
              fontSize: "0.8rem",
            }}
          >
            {(close) => (
              <>
                <div className="mt-4 mr-4">
                  <XCancel close={close} />
                </div>
                <div className="px-[24px] pb-[32px] w-[500px] h-[auto]">
                  <Formik
                    onSubmit={(values) => handleOnSubmit(values, close)}
                    validationSchema={EmployeeSchema}
                    initialValues={initialEmployeeValues}
                  >
                    {({ handleSubmit }) => (
                      <>
                        <p className="text-[#131221] font-black  text-[24px] grid justify-center">Add Employees</p>
                        <div className="pt-5">
                          <label>Name (first & last)</label>
                          <div className="mt-1 relative flex justify-end">
                            <Field
                              name={"name"}
                              placeholder={"Input Employee's full name"}
                              className="border w-[500px] h-[40px] border-[#030729] opacity-50 rounded px-2  focus:outline-none "
                            />
                          </div>
                          <ErrorMessage
                            name={"name"}
                            render={(msg) => (
                              <div className={"text-[0.7812rem] text-red-600 text-left font-normal "}>{msg}</div>
                            )}
                          />
                        </div>
                        <div className="pt-5">
                          <label>Email address</label>
                          <div className="mt-1 relative flex justify-end">
                            <Field
                              name={"email"}
                              placeholder={"Input employee email"}
                              className="border w-[500px] h-[40px] border-[#030729] opacity-50 rounded px-2  focus:outline-none "
                            />
                          </div>
                          <ErrorMessage
                            name={"email"}
                            render={(msg) => (
                              <div className={"text-[0.7812rem] text-red-600 text-left font-normal "}>{msg}</div>
                            )}
                          />{" "}
                        </div>
                        <div className="pt-5">
                          <label>Role</label>
                          <div className="mt-1 relative flex justify-end">
                            <Field
                              name={"role"}
                              placeholder={"Input employee role"}
                              className="border w-[500px] h-[40px] border-[#030729] opacity-50 rounded px-2  focus:outline-none "
                            />
                          </div>
                          <ErrorMessage
                            name={"role"}
                            render={(msg) => (
                              <div className={"text-[0.7812rem] text-red-600 text-left font-normal "}>{msg}</div>
                            )}
                          />{" "}
                        </div>
                        <div className="pt-5">
                          <label>Department</label>
                          <div className="mt-1 relative flex justify-end">
                            <Field
                              as={"select"}
                              name={"department"}
                              placeholder={"Select department"}
                              className={"w-full  placeholder:text-[0.78125rem] border border-[#8E8E8E] focus:outline-none"}
                            >
                              <option value="">Select a department </option>
                              <option value="Engineering">Product</option>
                              <option value="Engineering">Marketing</option>
                              <option value="Engineering">Design</option>
                              {/* {roles &&
                                roles.map((item) => (
                                  <option key={item.code} value={item.code}>
                                    {item.name}
                                  </option>
                                ))} */}
                            </Field>
                          </div>
                          <ErrorMessage
                            name={"role"}
                            render={(msg) => <div className={"text-[0.7812rem] text-red-600 text-left font-normal text-gray"}>{msg}</div>}
                          />{" "}
                        </div>
                        <div className="pt-5">
                          <label>Salary</label>
                          <div className="mt-1 relative flex justify-end">
                            <Field
                              name={"salary"}
                              onKeyDown={(e) => {
                                e.key === "Enter" && handleSubmit();
                              }}
                              placeholder={"Input salary "}
                              className="border w-[500px] h-[40px] border-[#030729] opacity-50 rounded px-2  focus:outline-none "
                            />
                          </div>
                          <ErrorMessage
                            name={"salary"}
                            render={(msg) => (
                              <div className={"text-[0.7812rem] text-red-600 text-left font-normal "}>{msg}</div>
                            )}
                          />{" "}
                        </div>
                        <button
                          onClick={handleSubmit}
                          className="text-white bg-orange mt-8 hover:text-orange hover:bg-white text-base font-bold border-2 border-orange rounded-full p-2 hover:bg-orange hover:text-white w-full"
                        >
                          Submit <i className="fa fa-solid fa-arrow-right ml-2"></i>
                        </button>
                      </>
                    )}
                  </Formik>
                </div>
              </>
            )}
          </Popup>
        </div>
        {data?.data?.length === 0 && query.search_query === "" ? (
          <EmptyFetch content={"No Employees added yet"} />
        ) : (
          <>
            <div className="flex text-base font-bold text-[#8E8E8E] mb-10">
              <p className={`mr-10 cursor-pointer ${employeesTab === "all" && "text-orange underline"}`} onClick={() => toggleTab("all")}>
                All
              </p>
              <p
                className={`mr-10 cursor-pointer ${employeesTab === "engineering" && "text-orange underline"}`}
                onClick={() => toggleTab("engineering")}
              >
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
            <EmployeesList data={data} query={query} setQuery={setQuery} />
          </>
        )}
      </div>
      <div className="w-[20%] mr-10 ml-5 mt-5">
        <Overview />
      </div>
    </Wrapper>
  );
};

export default Employees;
