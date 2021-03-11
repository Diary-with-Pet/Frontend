const MYPAGE_REQUEST = "MYPAGE_REQUEST";
const MYPAGE_SUCCESS = "MYPAGE_SUCCESS";
const MYPAGE_FAILURE = "MYPAGE_FAILURE";

const EDIT_REQUEST = "EDIT_REQUEST_MYPAGE";
const EDIT_SUCCESS = "EDIT_SUCCESS_MYPAGE";
const EDIT_FAILURE = "EDIT_FAILURE_MYPAGE";

const mypageRequest = () => ({ type: MYPAGE_REQUEST });
const mypageSuccess = (data) => ({ type: MYPAGE_SUCCESS, data });
const mypageFailure = (reason) => ({ type: MYPAGE_FAILURE, reason });

const editRequest = (data, id) => ({ type: EDIT_REQUEST, data, id });
const editSuccess = (data) => ({ type: EDIT_SUCCESS, data });
const editFailure = (reason) => ({ type: EDIT_FAILURE, reason });

const initalState = {};
const mypageReducer = (state = initalState, action) => {
  switch (action.type) {
    case MYPAGE_REQUEST:
      return { action };
    case MYPAGE_FAILURE:
      return { result: "fail", reason: action.reason };
    case MYPAGE_SUCCESS:
      return action.data;
    case EDIT_REQUEST:
      console.log("mypage");
      return { ...state, data: action.data, id: action.id };
    case EDIT_SUCCESS:
      const result = action.data;
      result["result"] = "success";
      console.log({ ...result, id: state.id });
      return { ...result, id: state.id };
    case EDIT_FAILURE:
      return { ...state, result: "fail", reason: "" };
    default:
      return state;
  }
};

export default mypageReducer;

export const mypageTypes = {
  MYPAGE_REQUEST,
  MYPAGE_FAILURE,
  MYPAGE_SUCCESS,
  EDIT_REQUEST,
  EDIT_SUCCESS,
  EDIT_FAILURE,
};

export const mypageActions = {
  mypageRequest,
  mypageSuccess,
  mypageFailure,
  editRequest,
  editSuccess,
  editFailure,
};
