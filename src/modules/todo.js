const REQUEST_LIST = "REQUEST_LIST";
const REQUEST_LIST_SUCCESS = "REQUEST_LIST_SUCCESS";
const REQUEST_LIST_FAILURE = "REQUEST_LIST_FAILURE";

const CREATE_REQUEST = "CREATE_REQUEST";
const CREATE_SUCCESS = "CREATE_SUCCESS";
const CREATE_FAILURE = "CREATE_FAILURE";

const DELETE_REQUEST = "DELETE_REQUEST";
const DELETE_SUCCESS = "DELETE_SUCCESS";
const DELETE_FAILURE = "DELETE_FAILURE";

const EDIT_REQUEST = "EDIT_REQUEST";
const EDIT_SUCCESS = "EDIT_SUCCESS";
const EDIT_FAILURE = "EDIT_FIALURE";

const requestList = () => ({ type: REQUEST_LIST });
const requestSuccess = (data) => ({ type: REQUEST_LIST_SUCCESS, data });
const requestFail = (reason) => ({ type: REQUEST_LIST_FAILURE, reason });

const createRequest = (data) => ({ type: CREATE_REQUEST, data });
const createSuccess = (data) => ({ type: CREATE_SUCCESS, data });
const createFail = (reason) => ({ type: CREATE_FAILURE, reason });

const deleteRequest = (id) => ({ type: DELETE_REQUEST, id });
const deleteSuccess = (id) => ({ type: DELETE_SUCCESS, id });
const deleteFail = (reason) => ({ type: DELETE_FAILURE, reason });

const editRequest = (data) => ({ type: EDIT_REQUEST, data });
const editSuccess = (data) => ({ type: EDIT_SUCCESS, data });
const editFail = (reason) => ({ type: EDIT_FAILURE, reason });

const todoReducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case REQUEST_LIST_SUCCESS:
      return { result: "success", list: action.data };
    case REQUEST_LIST_FAILURE:
      return { result: "fail", reason: action.reason };
    case CREATE_REQUEST:
      return { ...state, data: action.data };
    case CREATE_SUCCESS:
      return { ...state, data: action.data };
    case CREATE_FAILURE:
      return { ...state, reason: action.reason };
    case DELETE_REQUEST:
      return { ...state, id: action.id };
    case DELETE_SUCCESS:
      console.log(action);
      return {
        result: "success",
        list: state.list.filter((item) => {
          if (item.id !== action.id) return item;
        }),
      };
    case DELETE_FAILURE:
      return {
        ...state,
        result: "fail",
        reason: action.reason,
      };

    case EDIT_REQUEST:
      return {
        ...state,
        data: action.data,
      };
    case EDIT_SUCCESS:
      return {
        list: state.list.map((item) => {
          if (item.id === state.data.id) item = state.data;
          return item;
        }),
      };
    default:
      return state;
  }
};

export default todoReducer;

export const todoTypes = {
  REQUEST_LIST,
  REQUEST_LIST_SUCCESS,
  REQUEST_LIST_FAILURE,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  DELETE_FAILURE,
  EDIT_REQUEST,
  EDIT_SUCCESS,
  EDIT_FAILURE,
};

export const todoActions = {
  requestList,
  requestSuccess,
  requestFail,
  deleteRequest,
  deleteSuccess,
  deleteFail,
  editRequest,
  editSuccess,
  editFail,
};
