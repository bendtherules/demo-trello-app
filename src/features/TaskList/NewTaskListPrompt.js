import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createList } from "../../storeSlices/boardSlice";

import styles from "./TaskList.module.css";

export function NewTaskListPrompt() {
  const dispatch = useDispatch();

  const [newListname, setNewListname] = useState("");

  return (
    <div className={styles.listContainer}>
      <label className="sr-only" for="createNewList">Create new list</label>
      <input
        id="createNewList"
        className={styles.newListInput}
        type="text"
        placeholder="+ Create list"
        value={newListname}
        onChange={e => setNewListname(e.target.value)}
        onKeyPress={e => {
          if (newListname.trim().length > 0 && e.key === "Enter") {
            dispatch(createList({ name: newListname }));

            setNewListname("");
          }
        }}
      ></input>
    </div>
  );
}
