const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const GOTO_REGISTER = "GOTO_REGISTER";

const loginRequest = (data) => ({ type: LOGIN_REQUEST, data });
const loginSuccess = () => ({ type: LOGIN_SUCCESS });
const gotoRegister = () => ({ type: GOTO_REGISTER });

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { data: action.data };
    case LOGIN_SUCCESS:
      return { ...state, action };
    case GOTO_REGISTER:
      return { ...state, action };
    default:
      return state;
  }
};

const loginActions = {
  loginRequest,
  loginSuccess,
  gotoRegister,
};
const loginTypes = {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  GOTO_REGISTER,
};
export default loginReducer;
export { loginActions, loginTypes };
