export const ageUp = (val) => {
  return {
    type: "AGE_UP",
    value: val,
  };
};
export const ageDown = (val) => {
  return {
    type: "AGE_DOWN",
    value: val,
  };
};

export const ageUpAsync = (val) => {
  return (dispatch) => {
    dispatch(loading());
    setTimeout(() => {
      if (randomSuccess()) {
        dispatch(success());
        dispatch(ageUp(val));
      } else {
        dispatch(failure());
      }
    }, 5000);
  };
};

export const loading = () => {
  return {
    type: "LOADING",
  };
};

export const success = () => {
  return {
    type: "SUCCESS",
  };
};

export const failure = () => {
  return {
    type: "FAILURE",
  };
};

//----------------------------------HELPERS-------------------

const randomSuccess = () => {
  return Date.now() % 2 === 0;
};
