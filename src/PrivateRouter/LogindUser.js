import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../Pages/Login";

export default function Loggedinuser() {
  const user = useSelector((users) => users.logIn.logined);

  return user ? <Outlet /> : <Login />;
}
