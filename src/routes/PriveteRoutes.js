import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../components/login/Login";

export default function PriveteRoutes() {
  const { isLogged } = useSelector((state) => state.login);

  return (
    <>
      <div>{isLogged ? <Outlet /> : <Login />}</div>
    </>
  );
}
