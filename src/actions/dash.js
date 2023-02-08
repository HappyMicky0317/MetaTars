export const setWalletAddress = (address) => async (dispatch) => {
  dispatch({
    type: "SET_WALLET_ADDRESS",
    payload: address,
  });
};

export const setTimeCount = (time) => async (dispatch) => {
  dispatch({
    type: "SET_TIMECOUNT",
    payload: time,
  });
};
