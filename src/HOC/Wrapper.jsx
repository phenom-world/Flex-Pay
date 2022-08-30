import Sidebar from "../components/Sidebar";

import AuthRoute from "./AuthRoute";

const Wrapper = ({ logout, children }) => {
  return (
    <AuthRoute>
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </AuthRoute>
  );
};

export default Wrapper;
