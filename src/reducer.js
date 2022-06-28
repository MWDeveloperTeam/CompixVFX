export const initialState = false;

export const reducer = (state, action) => {
  if (action.type === "STUDENT") {
    return action.payload;
  } else if (action.type === "ATTENDENCE") {
    return action.payload;
  }

  return state;
};
