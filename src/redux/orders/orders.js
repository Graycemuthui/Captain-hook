import axios from "axios";

const GET_DATA = "CAPTAIN_HOOK/redux/GET_DATA";
const initialState = [];

export const fetchData = () => async (dispatch) => {
  const res = await axios.get("http://localhost:3000/api/v1/orders");

  return dispatch({ type: GET_DATA, payload: res.data.message });
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default orderReducer;
