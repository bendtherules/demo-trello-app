import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask, editTask, deleteTask } from "../../storeSlices/boardSlice";
import useAutoHeightTextArea from "../../utils/useAutoHeightTextArea";

import styles from "./TaskCard.module.css";

export function CreateOrEditTaskCard({
  mode = "create" /* "create" | "edit" */,
  listID,
  cardID,
  defaultCardText = "",
  onSubmit: parentOnSubmit = () => {},
  onCancel: parentOnCancel = () => {}
}) {
  /*
  ---------
  Init here
  ----------
  */
  const textAreaRef = useAutoHeightTextArea();
  const dispatch = useDispatch();

  const isCreateMode = mode === "create";

  const [newCardText, setNewCardText] = useState(defaultCardText);
  const [isFormOpen, setIsFormOpen] = useState(isCreateMode ? false : true);

  const isTextNonEmpty = newCardText.trim().length > 0;

  /*
  ---------
  Create evt handlers here
  ----------
  */
  const onComplete = () => {
    setNewCardText(defaultCardText);
    setIsFormOpen(false);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (isTextNonEmpty > 0) {
      if (isCreateMode) {
        dispatch(createTask({ text: newCardText, listID }));
      } else {
        const payload = { text: newCardText, cardID: cardID, listID };

        dispatch(editTask(payload));
      }
    }

    onComplete();

    parentOnSubmit();
  };

  const onCancel = e => {
    onComplete();

    parentOnCancel();
  };

  const onDelete = () => {
    const confirmDelete = window.confirm(
      "Do you really want to delete the task?"
    );
    if (confirmDelete) {
      const payload = { cardID: cardID, listID };
      dispatch(deleteTask(payload));
    }
  };

  /*
  ---------
  Render here
  ----------
  */
  return (
    <div>
      {!isFormOpen ? (
        <button
          className={styles.createInitBtn}
          type="button"
          onClick={e => setIsFormOpen(v => !v)}
        >
          {isCreateMode ? "+ Create Task" : "Edit Task"}
        </button>
      ) : (
        <form className={styles.createCardForm} onSubmit={onSubmit}>
          <textarea
            ref={textAreaRef}
            className={`${styles.cardContainer} ${styles.createCardContainer}`}
            placeholder="Create task"
            autoFocus={true}
            value={newCardText}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                onSubmit(e);
              }
            }}
            onChange={e => setNewCardText(e.target.value)}
          ></textarea>
          <div className={styles.createActionBtnContainer}>
            <div className={styles.createActionBtnRow}>
              <input type="submit" value="Save" disabled={!isTextNonEmpty} />
              <input type="button" value="Cancel" onClick={onCancel} />
            </div>
            {/* Show delete button onlyin edit mode */}
            {!isCreateMode ? (
              <div className={styles.createActionBtnRow}>
                <input
                  className={styles.deleteTaskBtn}
                  type="button"
                  value="Delete task"
                  onClick={onDelete}
                />
              </div>
            ) : null}
          </div>
        </form>
      )}
    </div>
  );
}
