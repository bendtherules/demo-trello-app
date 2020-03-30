import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { createList } from "../../storeSlices/boardSlice";

import { TaskCard } from "../TaskCard/TaskCard";
import { CreateOrEditTaskCard } from "../TaskCard/CreateOrEditTaskCard";

import styles from "./TaskList.module.css";

export function TaskList({ listData }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.listContainer} tabIndex={1}>
      <h3 className={styles.listName}>{listData.name}</h3>
      <div className={styles.cardsContainer}>
        {listData.cards.map(cardData => (
          <TaskCard key={cardData.id} listID={listData.id} cardData={cardData} />
        ))}
        <CreateOrEditTaskCard listID={listData.id} />
      </div>
    </div>
  );
}
