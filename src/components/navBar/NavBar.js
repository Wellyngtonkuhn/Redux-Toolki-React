import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/slices/loginSlice";

import "./index.css";

export default function NavBar() {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.login);
  return (
    <header className="header-section">
      <div className="title-header">
        <h1>Redux</h1>
      </div>
      <nav className="navBar">
        <ul>
          <li>
            <Link to={"/"}>{`{ JSON } `}/ API</Link>
          </li>
          <li>
            <Link to={"counter"}>Counter</Link>
          </li>
          <li>
            <Link to={"cursos"}>Cursos</Link>
          </li>{" "}
        </ul>
      </nav>
      {name && (
        <div className="logout">
          <p>{name}</p>
          <button onClick={() => dispatch(logout())}>LogOut</button>
        </div>
      )}
    </header>
  );
}
