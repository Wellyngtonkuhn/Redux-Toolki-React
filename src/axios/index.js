import axios from "axios";

import {
  fetchUsersRequest,
  fetchUsersSucceed,
  fetchUsersError,
} from "../redux/slices/asyncRestApi";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      const response = await axios.get(`${BASE_URL}`);
      dispatch(fetchUsersSucceed(response.data));
    } catch (error) {
      dispatch(fetchUsersError(error.message));
    }
  };
};
