import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import Login from "./components/login/Login";
import { logout } from "./redux/slices/loginSlice";
import Counter from "./components/counter/Counter";
import Sidebar from "./components/rockseat/Sidebar";
import Video from "./components/rockseat/Video";

function App() {
  const { name, isLogged } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  return (
    <div className="App-header">
      Usuário: {name}
      {name && <button onClick={() => dispatch(logout())}>LogOut</button>}
      {isLogged ? (
        <>
          <hr />
          <Counter />
          <hr />
          <Sidebar />
          <Video />
        </>
      ) : (
        <>
          <Login />
          <h1>Digiti seu nome para começar...</h1>
        </>
      )}
    </div>
  );
}

export default App;
