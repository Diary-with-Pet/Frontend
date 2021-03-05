const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

const loginRequest = (data) => ({ type: LOGIN_REQUEST, data });
const loginSuccess = () => ({ type: LOGIN_SUCCESS });
const loginFailure = (reason) => ({ tpye: LOGIN_FAILURE, reason });

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { data: action.data };
    case LOGIN_SUCCESS:
      return { result: "success" };
    case LOGIN_FAILURE:
      return { result: "fail", reason: action.reason };
    default:
      return state;
  }
};

const loginActions = {
  loginRequest,
  loginSuccess,
  loginFailure,
};
const loginTypes = {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
};
export default loginReducer;
export { loginActions, loginTypes };
