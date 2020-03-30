import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createList, selectBoard } from "./boardSlice";

import styles from "./Board.module.css";

export function Board() {
  const boardData = useSelector(selectBoard);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.boardName}>{boardData.name}</div>
      <div className={styles.listsContainer}>
        {boardData.lists.map(listData => (
          <div key={listData.id} className={styles.listContainer}>
            <div className={styles.listName}>{listData.name}</div>
            <div className={styles.cardsContainer}>
              {listData.cards.map(cardData => (
                <div key={cardData.id} className={styles.cardContainer}>
                  {cardData.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
