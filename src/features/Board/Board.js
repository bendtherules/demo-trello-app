import React, { useState } from "react";
import { useSelector } from "react-redux";

import { TaskList } from "../TaskList/TaskList";
import { NewTaskListPrompt } from "../TaskList/NewTaskListPrompt";

import styles from "./Board.module.css";

export function Board() {
  const selectBoardData = state => state.board;
  const boardData = useSelector(selectBoardData);

  return (
    <div>
      <div className={styles.boardName}>{boardData.name}</div>
      <div className={styles.listsContainer}>
        {boardData.lists.map(listData => (
          <TaskList key={listData.id} listData={listData} />
        ))}
        <NewTaskListPrompt key="newListPrompt" />
      </div>
    </div>
  );
}
