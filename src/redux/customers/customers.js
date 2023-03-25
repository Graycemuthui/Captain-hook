import axios from "axios";

const GET_DATA = "CAPTAIN_HOOK/redux/GET_DATA";

const initialState = [];

export const fetchCustomers = () => async (dispatch) => {
  const res = await axios.get("http://127.0.0.1:3000/api/v1/customers");

  return dispatch({ type: GET_DATA, payload: res.data.message });
};

const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default customersReducer;
