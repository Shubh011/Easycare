import { Add_ADDRESS, DELETE_ADDRESS } from "../actions/ActionTypes";
export const AddressReducer = (state = [], action) => {
  switch (action.type) {
    case Add_ADDRESS:
      return [...state, action.payload];
    case DELETE_ADDRESS:
      dltArr = state.filter((item, index) => {
        return index !== action.payload;
      });

      return dltArr;
    default:
      return state;
  }
};
