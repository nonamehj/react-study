import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./action";
import data from "../data";

const reducer = (state, action) => {
  // switch or if 사용  가독성은 if문이 좋음
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { people: data };
  }
  if (action.type === REMOVE_ITEM) {
    console.log(action);
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }
  // return state;
  throw new Error(`no matching "${action.type} action type"`);
};

export default reducer;
