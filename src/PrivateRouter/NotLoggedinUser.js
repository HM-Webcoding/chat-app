import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function NotLoggedinUser() {
  const user = useSelector((users) => users.logIn.logined);
  return user ? <Navigate to="/" /> : <Outlet />;
}
