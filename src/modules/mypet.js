const LIST_REQUEST = "LIST_REQUEST_MYPET";
const LIST_REQUEST_SUCCESS = "LIST_REQUEST_SUCCESS_MYPET";
const LIST_REQUEST_FAILURE = "LIST_REQUEST_FAILURE_MYPET";

const CREATE_REQUEST = "CREATE_REQUEST_MYPET";
const CREATE_SUCCESS = "CREATE_SUCCESS_MYPET";
const CREATE_FAILURE = "CREATE_FAILURE_MYPET";

const SET_ID = "SET_ID";
const EDIT_REQUEST = "EDIT_REQUEST_MYPET";
const EDIT_SUCCESS = "EDIT_SUCCESS_MYPET";
const EDIT_FIALURE = "EDIT_FIALURE_MYPET";

const DELETE_REQUEST = "DELETE_REQUEST_MYPET";
const DELETE_SUCCESS = "DELETE_SUCCESS_MYPET";
const DELETE_FAILURE = "DELETE_FAILURE_MYPET";

const listRequest = () => ({ type: LIST_REQUEST });
const listRequestSuccess = (data) => ({ type: LIST_REQUEST_SUCCESS, data });
const listRequestFail = () => (reason) => ({
  type: LIST_REQUEST_FAILURE,
  reason,
});

const createRequest = (data) => ({ type: CREATE_REQUEST, data });
const createSuccess = () => ({ type: CREATE_SUCCESS });
const createFail = (reason) => ({
  type: CREATE_FAILURE,
  reason,
});

const setMypetId = (id) => ({ type: SET_ID, id });
const editRequest = (data, id) => ({ type: EDIT_REQUEST, data, id });
const editSuccess = () => ({ type: EDIT_SUCCESS });
const editFail = (reason) => ({ type: EDIT_FIALURE, reason });

const deleteRequest = (id) => ({ type: DELETE_REQUEST, id });
const deleteSuccess = (id) => ({ type: DELETE_SUCCESS, id });
const deleteFail = (reason) => ({ type: DELETE_FAILURE, reason });

const mypetReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ID:
      return { ...state, id: action.id };
    case LIST_REQUEST_SUCCESS:
      return { ...state, list: action.data };
    case LIST_REQUEST_FAILURE:
      return { result: "fail" };
    case CREATE_REQUEST:
      return { ...state, result: "success" };
    case CREATE_SUCCESS:
      return { ...state, ...action, result: "success" };
    case CREATE_FAILURE:
      return { ...state, result: "fail" };
    case EDIT_REQUEST:
      return { ...state, ...action };
    case EDIT_SUCCESS:
      return { ...state, result: "success" };
    case EDIT_FIALURE:
      return { ...state, result: "fail", reason: action.reason };
    case DELETE_REQUEST:
      return { ...state, id: action.id };
    case DELETE_SUCCESS:
      return { ...state, result: "succes" };
    case DELETE_FAILURE:
      return { ...state, result: "fail", reason: action.reason };
    default:
      return state;
  }
};

export const mypetTypes = {
  LIST_REQUEST,
  EDIT_REQUEST,
  CREATE_REQUEST,
  DELETE_REQUEST,
};
export const mypetActions = {
  listRequest,
  listRequestSuccess,
  listRequestFail,
  createRequest,
  createSuccess,
  createFail,
  editRequest,
  editSuccess,
  editFail,
  deleteRequest,
  deleteSuccess,
  deleteFail,
  setMypetId,
};

export default mypetReducer;
