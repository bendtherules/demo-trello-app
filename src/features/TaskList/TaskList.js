import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { createList } from "../../storeSlices/boardSlice";

import { TaskCard } from "../TaskCard/TaskCard";
import { NewTaskCardPrompt } from "../TaskCard/NewTaskCardPrompt";

import styles from "./TaskList.module.css";

export function TaskList({ listData }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.listContainer}>
      <div className={styles.listName}>{listData.name}</div>
      <div className={styles.cardsContainer}>
        {listData.cards.map(cardData => (
          <TaskCard key={cardData.id} cardData={cardData} />
        ))}
        <NewTaskCardPrompt listID={listData.id} />
      </div>
    </div>
  );
}
