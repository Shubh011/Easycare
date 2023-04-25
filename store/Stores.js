import { AddressReducer } from "../reducers/AddressReducers";
import { combineReducers } from "@reduxjs/toolkit";
import { createStore } from "@reduxjs/toolkit";
const rootreducer = combineReducers({ AddressReducer });
export const store = createStore(rootreducer);
