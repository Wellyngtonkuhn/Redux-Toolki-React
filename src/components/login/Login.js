import { useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/loginSlice";

import "./index.css";

export default function Login() {
  const nameRef = useRef("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(nameRef.current));
    e.target.reset();
  };

  return (
    <div className="login">
      <div style={{ textAlign: "center", padding: "1rem" }}>
        <h1>Digite seu nome para começar...</h1>
      </div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          onChange={(e) => (nameRef.current = e.target.value)}
        />
        <br />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
