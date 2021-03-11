const LIST_REQUEST = "LIST_REQUEST_MYPET";
const LIST_REQUEST_SUCCESS = "LIST_REQUEST_SUCCESS_MYPET";
const LIST_REQUEST_FAILURE = "LIST_REQUEST_FAILURE_MYPET";

const CREATE_REQUEST = "CREATE_REQUEST_MYPET";
const CREATE_SUCCESS = "CREATE_SUCCESS_MYPET";
const CREATE_FAILURE = "CREATE_FAILURE_MYPET";

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
const createSuccess = (data) => ({ type: CREATE_SUCCESS, data });
const createFail = () => (reason) => ({
  type: CREATE_FAILURE,
  reason,
});

const editRequest = (data) => ({ type: EDIT_REQUEST, data });
const editSuccess = () => ({ type: EDIT_SUCCESS });
const editFail = (reason) => ({ type: EDIT_FIALURE, reason });

const deleteRequest = (id) => ({ type: DELETE_REQUEST, id });
const deleteSuccess = (id) => ({ type: DELETE_SUCCESS, id });
const deleteFail = (reason) => ({ type: DELETE_FAILURE, reason });

const mypetReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_REQUEST:
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
  listRequestSuccess,
  createRequest,
  createSuccess,
  createFail,
  editRequest,
  editSuccess,
  editFail,
  deleteRequest,
  deleteSuccess,
  deleteFail,
};

export default mypetReducer;
