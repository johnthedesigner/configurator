// Action type constants
export const actionTypes = {
  TEMP: "TEMP"
};

export const temp = data => {
  return {
    todo: data,
    type: actionTypes.TEMP
  };
};
