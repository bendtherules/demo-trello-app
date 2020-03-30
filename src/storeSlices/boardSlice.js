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
    },

    editList: (state, action) => {
      const { name, listID } = action.payload;

      const existingList = state.lists.find(({ id }) => id === listID);

      existingList.name = name;
    },

    createTask: (state, action) => {
      const { text: cardText, listID: parentListID } = action.payload;

      const parentList = state.lists.find(({ id }) => id === parentListID);
      parentList.cards.push({
        id: `Card #${generateID()}`,
        text: cardText
      });
    },

    editTask: (state, action) => {
      const { text: cardText, cardID, listID: parentListID } = action.payload;

      const parentList = state.lists.find(({ id }) => id === parentListID);
      const existingCard = parentList.cards.find(({ id }) => id === cardID);

      existingCard.text = cardText;
    },

    deleteTask: (state, action) => {
      const { text: cardText, cardID, listID: parentListID } = action.payload;

      const parentList = state.lists.find(({ id }) => id === parentListID);
      const existingCardIndex = parentList.cards.findIndex(({ id }) => id === cardID);

      if (existingCardIndex > -1) {
        parentList.cards.splice(existingCardIndex, 1);
      }
    }
  }
});

export const { createList, createTask, editList, editTask, deleteTask } = slice.actions;

export default slice.reducer;
