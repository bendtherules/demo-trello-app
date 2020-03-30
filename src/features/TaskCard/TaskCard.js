import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createList } from "../../storeSlices/boardSlice";

import styles from "./TaskCard.module.css";

export function TaskCard({ cardData }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.cardContainer}>
      {cardData.text}
    </div>
  );
}
