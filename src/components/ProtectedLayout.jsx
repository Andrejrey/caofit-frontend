import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = ({ isAuthenticated }) => {
  return <div>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default ProtectedLayout;
