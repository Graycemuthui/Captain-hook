import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import customerReducer from "./customers/customers";
import orderReducer from "./orders/orders";
import productReducer from "./products/products";

const reducer = combineReducers({
  customers: customerReducer,
  orders: orderReducer,
  products: productReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk));
export default store;
