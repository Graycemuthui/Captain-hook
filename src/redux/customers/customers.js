import axios from "axios";

const GET_CUSTOMERS = "GET_CUSTOMERS";
const initialState = {
  customers: [],
};

export const fetchCustomers = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3000/api/v1/customers");

    return dispatch({ type: GET_CUSTOMERS, payload: res.data.message });
  };
};

export const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS:
      return { ...state, customers: action.customers };
    default:
      return state;
  }
};
