import { ADD_ADDRESS, DELETE_ADDRESS } from "./ActionTypes";
export const addAddress = (data) => ({
  type: ADD_ADDRESS,
  payload: data,
});
export const deleteAddress = (index) => ({
  type: DELETE_ADDRESS,
  payload: index,
});
