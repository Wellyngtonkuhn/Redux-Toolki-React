import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../axios";
import { changeID } from "../redux/slices/singleJSONID";

import "../styles/JsonApi.css";

export default function JsonApi() {
  const dispatch = useDispatch();

  const { error, loading, users } = useSelector((state) => state.api);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <div className="jsonApi-section">
        <div>
          <h1>{"{JSON}"} Placeholder</h1>
          <p>Clique em um usuário para ver mais detalhes!</p>
        </div>
        <div className="list-data">
          <ul>
            {loading && "Carregando..."}
            {users &&
              users.map((user) => {
                return (
                  <li key={user.id}>
                    <a onClick={() => dispatch(changeID(user.id))}>
                      {user.name}
                    </a>
                  </li>
                );
              })}
          </ul>
          {error && (
            <p>Falha ao carregar os dados, por favor tente mais tarte!</p>
          )}
        </div>
      </div>
    </>
  );
}
