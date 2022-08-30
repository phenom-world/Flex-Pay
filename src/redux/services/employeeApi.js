import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth, createRequest, createRequestWithParams } from "./shared";

export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["employees"],
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: ({ page, limit, search_query }) => createRequestWithParams(`company/employee`, { page, limit, search_query }),
      providesTags: (result, _error, _arg) => (result?.data ? [...result?.data.map(({ id }) => ({ type: "Groups", id })), "Groups"] : ["Groups"]),
    }),

    getAnEmployee: builder.query({
      query: (id) => createRequest(`company/employee/${id}`),
      providesTags: (_result, _error, id) => [{ type: "Groups", id }],
    }),

    addEmployee: builder.mutation({
      query: (data) => {
        return {
          url: `/auth/company/employee`,
          method: "post",
          body: data,
        };
      },
    }),
  }),
});

export const { useAddEmployeeMutation } = employeeApi;
