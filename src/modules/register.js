const REGISTER_REQUEST = "REGISTER_REQUEST";
const REGISTER_SUCCESSS = "REGISTER_SUCCESSS";
const REGISTER_FAILURE = "REGISTER_FAILURE";

const registerRequest = (data) => ({ type: REGISTER_REQUEST, data });
const registerSuccesss = () => ({ type: REGISTER_SUCCESSS });
const registerFailure = (reason) => ({ type: REGISTER_FAILURE, reason });

const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { data: action.data };
    case REGISTER_SUCCESSS:
      return { result: "success" };
    case REGISTER_FAILURE:
      return { result: "fail", reason: action.reason };
    default:
      return state;
  }
};

export const registerActions = {
  registerRequest,
  registerSuccesss,
  registerFailure,
};

export const registerTypes = {
  REGISTER_REQUEST,
  REGISTER_SUCCESSS,
  REGISTER_FAILURE,
};

export default registerReducer;
