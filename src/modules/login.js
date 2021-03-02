const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const loginRequest = (data) => ({ type: LOGIN_REQUEST, data });
const loginSuccess = () => ({ type: LOGIN_SUCCESS });

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { data: action.data };
    case LOGIN_SUCCESS:
      return { ...state, action };
    default:
      return state;
  }
};

const loginActions = {
  loginRequest,
  loginSuccess,
};
const loginTypes = {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
};
export default loginReducer;
export { loginActions, loginTypes };
