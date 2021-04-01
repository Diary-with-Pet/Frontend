const MOD_TO_LIST = "MOD_TO_LIST";
const MOD_TO_DETAIL = "MOD_TO_DETAIL";

const REQUEST_LIST = "REQUEST_LIST_DIARY";
const REQUEST_LIST_SUCCESS = "REQUEST_LIST_DIARY_SUCCESS";
const REQUEST_LIST_FAILURE = "REQUEST_LIST_DIARY_FAILURE";

const CREATE_REQUEST = "CREATE_REQUEST_DIARY";
const CREATE_SUCEESS = "CREATE_SUCEESS_DIARY";
const CREATE_FAILURE = "CREATE_FAILURE_DIARY";

const DELETE_REQUEST = "DELETE_REQUEST_DIARY";
const DELETE_SUCEESS = "DELETE_SUCEESS_DIARY";
const DELETE_FAILURE = "DELETE_FAILURE_DIARY";

const REQUEST_DETAIL = "REQUEST_DETAIL";
const REQUEST_DETAIL_SUCCESS = "REQUEST_DETAIL_SUCCESS";
const REQUEST_DETAIL_FAILURE = "REQUEST_DETAIL_FAILURE";

const modToList = () => ({ type: MOD_TO_LIST });
const modToDetail = (id) => ({ type: MOD_TO_DETAIL, id });

const requestList = () => ({ type: REQUEST_LIST });
const requestSuccess = (data) => ({ type: REQUEST_LIST_SUCCESS, data });
const requestFail = (reason) => ({ type: REQUEST_LIST_FAILURE, reason });

const createRequest = (data) => ({ type: CREATE_REQUEST, data });
const createSuccess = () => ({ type: CREATE_SUCEESS });
const createFail = (reason) => ({ type: CREATE_FAILURE, reason });

const deleteReqeust = (id) => ({ type: DELETE_REQUEST, id });
const deleteSuccess = () => ({ type: DELETE_SUCEESS });
const deleteFail = (reason) => ({ type: DELETE_FAILURE, reason });

const detailRequest = (id) => ({ type: REQUEST_DETAIL, id });
const detailSuccess = (data) => ({ type: REQUEST_DETAIL_SUCCESS, data });
const detailFail = (reason) => ({ type: REQUEST_DETAIL_FAILURE, reason });

const diaryReducer = (state = { mod: "list", list: [] }, action) => {
  switch (action.type) {
    case MOD_TO_LIST:
      return { mod: "list" };
    case MOD_TO_DETAIL:
      return { ...state, mod: "detail", id: action.id };
    case REQUEST_LIST:
      return { ...state };
    case REQUEST_LIST_SUCCESS:
      return { ...state, list: action.diaryActions };
    case REQUEST_LIST_FAILURE:
      return { ...state, reason: action.reason };
    case REQUEST_DETAIL:
      return { ...state, id: action.id };
    case REQUEST_DETAIL_SUCCESS:
      return { ...state, data: action.data };
    case REQUEST_DETAIL_FAILURE:
      return { ...state, reason: action.reason };
    case CREATE_REQUEST:
      return { ...state, data: action.data };
    case CREATE_SUCEESS:
      return { ...state };
    case CREATE_FAILURE:
      return { ...state, reason: action.reason };
    case DELETE_REQUEST:
      return { ...state, id: action.id };
    case DELETE_SUCEESS:
      return { ...state };
    case DELETE_FAILURE:
      return { ...state, reason: action.reason };
    default:
      return state;
  }
};

export const diaryTypes = {
  MOD_TO_LIST,
  MOD_TO_DETAIL,
  REQUEST_LIST,
  CREATE_REQUEST,
  DELETE_REQUEST,
  REQUEST_DETAIL,
};
export const diaryActions = {
  modToList,
  modToDetail,
  requestList,
  requestSuccess,
  requestFail,
  detailRequest,
  detailSuccess,
  detailFail,
  createRequest,
  createSuccess,
  createFail,
  deleteReqeust,
  deleteSuccess,
  deleteFail,
};

export default diaryReducer;
