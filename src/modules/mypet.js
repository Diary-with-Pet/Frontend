const LIST_REQUEST = "LIST_REQUEST";
const LIST_REQUEST_SUCCESS = "LIST_REQUEST_SUCCESS";
const LIST_REQUEST_FAILURE = "LIST_REQUEST_FAILURE";

const EDIT_REQUEST = "EDIT_REQUEST";
const EDIT_SUCCESS = "EDIT_SUCCESS";
const EDIT_FIALURE = "EDIT_FIALURE";

const listRequest = () => ({ type: LIST_REQUEST });
const listRequestSuccess = (data) => ({ type: LIST_REQUEST_SUCCESS, data });
const listRequestFail = () => (reason) => ({
  type: LIST_REQUEST_FAILURE,
  reason,
});

const editRequest = (data) => ({ type: EDIT_REQUEST, data });
const editSuccess = () => ({ type: EDIT_SUCCESS });
const editFail = (reason) => ({ type: EDIT_FIALURE, reason });
