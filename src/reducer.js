import { ReducerText } from "./AdminDashboard/Utils/HelperText";
export const initialState = "";

export const reducer = (state, action) => {
  if (action.type === ReducerText.ReduStudent) {
    return action.payload;
  } else if (action.type === ReducerText.ReduAttendence) {
    return action.payload;
  } else if (action.type === ReducerText.ReduPayment) {
    return action.payload;
  }

  return state;
};
