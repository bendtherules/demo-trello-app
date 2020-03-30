import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../../storeSlices/boardSlice";

import styles from "./TaskCard.module.css";

export function NewTaskCardPrompt({ listID }) {
  const dispatch = useDispatch();

  const [newCardText, setNewCardText] = useState("");

  return (
    <div className={styles.listContainer}>
      <input
        type="text"
        placeholder="Create task"
        value={newCardText}
        onChange={e => setNewCardText(e.target.value)}
        onKeyPress={e => {
          if (newCardText.trim().length > 0 && e.key === "Enter") {
            dispatch(createTask({ text: newCardText, listID }));

            setNewCardText("");
          }
        }}
      ></input>
    </div>
  );
}
