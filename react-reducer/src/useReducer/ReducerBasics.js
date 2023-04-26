import React, { useReducer } from "react";
import data from "../data";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./action";
import reducer from "./reducer";

const defaultState = {
  people: data,
};

// const CLEAR_LIST = "CLEAR_LIST";
// const RESET_LIST = "RESET_LIST";
// const REMOVE_ITEM = "REMOVE_ITEM";
// const reducer = (state, action) => {
//   // switch or if 사용  가독성은 if문이 좋음
//   if (action.type === CLEAR_LIST) {
//     return { ...state, people: [] };
//   }
//   if (action.type === RESET_LIST) {
//     return { people: data };
//   }
//   if (action.type === REMOVE_ITEM) {
//     console.log(action);
//     const newPeople = state.people.filter(
//       (person) => person.id !== action.payload.id
//     );
//     return { ...state, people: newPeople };
//   }
//   // return state;
//   throw new Error(`no matching "${action.type} action type"`);
// };

const ReducerBasics = () => {
  // const [people, setPeople] = useState(data);
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };
  const clearList = () => {
    // dispatch({ type: "CLEAR_LIST", payload: "" });
    dispatch({ type: CLEAR_LIST, payload: "" });
    // setPeople([]);
  };
  const resetList = () => {
    // dispatch({ type: "RESET", payload: "" });
    dispatch({ type: RESET_LIST, payload: "" });
    // setPeople(data);
  };
  return (
    <div>
      <h2>UseReducer Basics</h2>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
          className="btn"
          onClick={resetList}
          style={{ marginTop: "2rem" }}
        >
          reset
        </button>
      ) : (
        <button
          className="btn"
          onClick={clearList}
          style={{ marginTop: "2rem" }}
        >
          clear
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
