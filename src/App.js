import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Rootlayout from "./Component/Rootlayout";
import HomePage from "./Pages/Home/index";
import NotLoggedinUser from "./PrivateRouter/NotLoggedinUser";
import ForgotPass from "./Component/ForgotPass";
import LogindUser from "./PrivateRouter/LogindUser";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<LogindUser />}>
          <Route element={<Rootlayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Route>
        <Route element={<NotLoggedinUser />}>
          <Route path="/signup" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/forgotPass" element={<ForgotPass />}></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
