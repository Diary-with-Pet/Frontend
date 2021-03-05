const MYPAGE_REQUEST = "MYPAGE_REQUEST";
const MYPAGE_RESULT = "MYPAGE_RESULT";

const EDIT_REQUEST = "EDIT_REQUEST";
const EDIT_SUCCESS = "EDIT_SUCCESS";
const EDIT_FAILURE = "EDIT_FAILURE";

const mypageRequest = () => ({ type: MYPAGE_REQUEST });
const mypageResult = (data) => ({ type: MYPAGE_RESULT, data });

const editRequest = (data) => ({ type: EDIT_REQUEST, data });
const editSuccess = () => ({ type: EDIT_SUCCESS });
const editFailure = (reason) => ({ type: EDIT_FAILURE, reason });

const mypageReducer = (state = {}, action) => {
  switch (action.type) {
    case MYPAGE_RESULT:
      return { data: action.data };
    case EDIT_REQUEST:
      return { data: action.data };
    case EDIT_SUCCESS:
      return { result: "success" };
    case EDIT_FAILURE:
      return { result: "fail", reason: action.reason };
    default:
      return state;
  }
};

export default mypageReducer;

export const mypageTypes = {
  MYPAGE_REQUEST,
  MYPAGE_RESULT,
  EDIT_REQUEST,
  EDIT_SUCCESS,
  EDIT_FAILURE,
};

export const mypageActions = {
  mypageRequest,
  mypageResult,
  editRequest,
  editSuccess,
  editFailure,
};
