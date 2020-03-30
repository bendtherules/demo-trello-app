import { createSlice } from "@reduxjs/toolkit";
import generateID from "../utils/generateID";

export const slice = createSlice({
  name: "board",
  initialState: {
    // TODO: hardcoded for now, change when renaming facility is available
    name: "Kubric UI",
    lists: [
      // Elements look like -
      // {
      //   id: '<random>1',
      //   name: "List 1",
      //   cards: [
      //     {
      //       id: '<random>2',
      //       text: "card 1"
      //     },
      //   ]
      // }

      {
        id: `List #${generateID()}`,
        name: "Backlog",
        cards: [
          {
            id: `Card #${generateID()}`,
            text:
              "UI: Modify display listing of ads to like the vimeo videos sections"
          },
          {
            id: `Card #${generateID()}`,
            text: "Creative insights view"
          }
        ]
      }
    ]
  },
  reducers: {
    // NOTE: Modifying state directly here is FINE and intended.
    // Because this uses redux tolkit, which uses immer internally
    // https://redux.js.org/redux-toolkit/overview#whats-included
    createList: (state, action) => {
      const { name } = action.payload;

      state.lists.push({
        id: `List #${generateID()}`,
        name,
        cards: []
      });
    }
  }
});

export const { createList } = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectBoard = state => state.board;

export default slice.reducer;
