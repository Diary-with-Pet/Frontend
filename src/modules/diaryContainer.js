const MOD_TO_LIST = "MOD_TO_LIST";
const MOD_TO_DETAIL = "MOD_TO_DETAIL";

const modToList = () => ({ type: MOD_TO_LIST });
const modToDetail = (id) => ({ type: MOD_TO_DETAIL, id });

const diaryReducer = (state = { mod: "list" }, action) => {
  switch (action.type) {
    case MOD_TO_LIST:
      return { mod: "list" };
    case MOD_TO_DETAIL:
      return { ...state, mod: "detail", id: action.id };
    default:
      return state;
  }
};

export const diaryTypes = {
  MOD_TO_LIST,
  MOD_TO_DETAIL,
};
export const diaryActions = {
  modToList,
  modToDetail,
};

export default diaryReducer;
