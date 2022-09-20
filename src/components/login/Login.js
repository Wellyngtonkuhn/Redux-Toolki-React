import { useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/loginSlice";

export default function Login() {
  const nameRef = useRef("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(nameRef.current));
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          onChange={(e) => (nameRef.current = e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
