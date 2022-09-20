import axios from "axios";

import {
  fetchUsersRequest,
  fetchUsersSucceed,
  fetchUsersError,
} from "../redux/slices/asyncRestApi";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSucceed(users));
      })
      .catch((err) => {
        dispatch(fetchUsersError(err.message));
      });
  };
};

