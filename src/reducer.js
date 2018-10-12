import { actionTypes } from "./actions.js";

// Log all actions that hit our reducer
const logAction = (action, state) => {
  if (process.env.NODE_ENV === "development") {
    console.group(action.type);
    console.log(action);
    // console.log(state);
    console.groupEnd();
  }
};

// Define an initial state for app boot and reset
const initialState = {};

function reducer(state = initialState, action) {
  // Log each action that hits the reducer
  logAction(action, state);

  switch (action.type) {
    case actionTypes.TEMP:
      return state;

    default:
      return state;
  }
}

export default reducer;
