import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../axios";
import { changeID } from "../../redux/slices/singleJSONID";

export default function ApiRest() {
  const dispatch = useDispatch();

  const { error, loading, users } = useSelector((state) => state.api);


  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <h1>{"{JSON}"} Placeholder</h1>
      <ul>
        {loading && "Carregando..."}
        {users &&
          users.map((user) => {
            return (
              <li key={user.id}>
                <button onClick={() => dispatch(changeID(user.id))}>{user.name}</button>
              </li>
            );
          })}
      </ul>
      {error && <p>Falha ao carregar os dados, por favor tente mais tarte!</p>}
    </>
  );
}
