import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import Login from "./components/login/Login";
import { logout } from "./redux/slices/loginSlice";
import Counter from "./components/counter/Counter";
import Sidebar from "./components/rockseat/Sidebar";
import Video from "./components/rockseat/Video";
import ApiRest from "./components/apiRest";

function App() {
  const { name, isLogged } = useSelector((state) => state.login);

  const dispatch = useDispatch();

  return (
    <div className="App-header">
      {isLogged ? (
        <>
          <h1>Usuário: {name}</h1>
          <button onClick={() => dispatch(logout())}>LogOut</button>
          <hr />
          <Counter />
          <hr />
          <Sidebar />
          <Video />
          <hr />
          <ApiRest />
        </>
      ) : (
        <>
          <h1>Digite seu nome para começar...</h1>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
