const initialState = {
  walletAddress: "",
  timestamp: 0,
};

function dashReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "SET_WALLET_ADDRESS":
      return {
        walletAddress: payload,
      };
    case "SET_TIMECOUNT":
      return {
        timestamp: payload,
      };
    default:
      return state;
  }
}

export default dashReducer;
