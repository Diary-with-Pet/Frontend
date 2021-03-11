const REQUEST_LIST = "REQUEST_LIST_TODO";
const REQUEST_LIST_SUCCESS = "REQUEST_LIST_SUCCESS_TODO";
const REQUEST_LIST_FAILURE = "REQUEST_LIST_FAILURE_TODO";

const CREATE_REQUEST = "CREATE_REQUEST_TODO";
const CREATE_SUCCESS = "CREATE_SUCCESS_TODO";
const CREATE_FAILURE = "CREATE_FAILURE_TODO";

const DELETE_REQUEST = "DELETE_REQUEST_TODO";
const DELETE_SUCCESS = "DELETE_SUCCESS_TODO";
const DELETE_FAILURE = "DELETE_FAILURE_TODO";

const EDIT_REQUEST = "EDIT_REQUEST_TODO";
const EDIT_SUCCESS = "EDIT_SUCCESS_TODO";
const EDIT_FAILURE = "EDIT_FIALURE_TODO";

const requestList = () => ({ type: REQUEST_LIST });
const requestSuccess = (data) => ({ type: REQUEST_LIST_SUCCESS, data });
const requestFail = (reason) => ({ type: REQUEST_LIST_FAILURE, reason });

const createRequest = (data) => ({ type: CREATE_REQUEST, data });
const createSuccess = (data) => ({ type: CREATE_SUCCESS, data });
const createFail = (reason) => ({ type: CREATE_FAILURE, reason });

const deleteRequest = (id) => ({ type: DELETE_REQUEST, id });
const deleteSuccess = (id) => ({ type: DELETE_SUCCESS, id });
const deleteFail = (reason) => ({ type: DELETE_FAILURE, reason });

const editRequest = (id, data) => ({ type: EDIT_REQUEST, id, data });
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
      return { result: "succes", list: [...state.list, action.data] };
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
        id: action.id,
      };
    case EDIT_SUCCESS:
      return {
        list: state.list.map((item) =>
          item.id === action.data.id ? { ...item, ...action.data } : item
        ),
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
  CREATE_REQUEST,
  CREATE_SUCCESS,
  CREATE_FAILURE,
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
  createRequest,
  createSuccess,
  createFail,
};
