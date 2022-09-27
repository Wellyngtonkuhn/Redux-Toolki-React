import { useSelector, useDispatch } from "react-redux";

import { showModal } from "../../redux/slices/singleJSONID";

import "./SingleJSON.css";

export default function SingleJSON() {
  const { id, show } = useSelector((state) => state.id);
  const { users } = useSelector((state) => state.api);

  const dispatch = useDispatch();

  console.log(show);

  return (
    <>
      {show && (
        <div className="modal-json">
          <div>
            <h3> {users?.[id]?.name}</h3>
            <h4>
              E-mail: <span>{users?.[id]?.email}</span>
            </h4>
            <h4>
              Username: <span>{users?.[id]?.username}</span>
            </h4>
            <h4>
              Phone: <span>{users?.[id]?.phone}</span>
            </h4>
            <h4>Website: {users?.[id]?.website}</h4>
          </div>
          <div className="modal-close">
            <a onClick={() => dispatch(showModal(false))}>X</a>
          </div>
        </div>
      )}
    </>
  );
}
