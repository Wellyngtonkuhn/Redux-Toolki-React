import axios from "axios";

import {
  fetchUsersRequest,
  fetchUsersSucceed,
  fetchUsersError,
} from "../redux/slices/asyncRestApi";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get(`${BASE_URL}`)
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSucceed(users));
      })
      .catch((err) => {
        dispatch(fetchUsersError(err.message));
      });
  };
};
