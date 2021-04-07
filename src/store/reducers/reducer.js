const initialState = {
  age: 20,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "AGE_UP":
      newState.age += action.value;
      break;

    case "AGE_DOWN":
      newState.age -= action.value;
      break;
    case "LOADING":
      newState.asyncActionSuccessState = "LOADING";
      break;
    case "SUCCESS":
      newState.asyncActionSuccessState = "SUCCESS";
      break;
    case "FAILURE":
      newState.asyncActionSuccessState = "FAILURE";
      break;
    default:
      break;
  }
  return newState;
};

export default reducer;
