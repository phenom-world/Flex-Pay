import { isEmpty } from "lodash";

export default function setupAxios(axios, store) {
  axios.interceptors.request.use(
    (config) => {
      const authorization = JSON.parse(localStorage.getItem("auth")).tokens;

      if (!isEmpty(authorization?.access)) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        config.headers.Authorization = `Bearer ${authorization?.access}`;
      }
      return config;
    },
    (err) => Promise.reject(err)
  );
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const authorization = JSON.parse(localStorage.getItem("auth")).tokens;
      if (!isEmpty(error.response)) {
        if (error.response.status === 401 && !isEmpty(authorization?.access)) {
          //log user out if token expires
          localStorage.clear();
          sessionStorage.clear();
          window.location.replace("/");
        }
      }
      return Promise.reject(error);
    }
  );
}
