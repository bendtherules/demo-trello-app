import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { createList } from "../../storeSlices/boardSlice";

import { TaskCard } from "../TaskCard/TaskCard";

import styles from "./TaskList.module.css";

export function TaskList({ listData }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.listContainer}>
      <div className={styles.listName}>{listData.name}</div>
      <div className={styles.cardsContainer}>
        {/* Refactor to card component */}
        {listData.cards.map(cardData => (
          <TaskCard key={cardData.id} cardData={cardData} />
        ))}
      </div>
    </div>
  );
}
