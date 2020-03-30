import React, { useState } from "react";

import { CreateOrEditTaskCard } from "./CreateOrEditTaskCard";

import styles from "./TaskCard.module.css";

export function TaskCard({ cardData, listID }) {
  const [isEditing, setIsEditing] = useState(false);

  const stopEditing = () => setIsEditing(false);
  const startEditing = () => setIsEditing(true);

  return !isEditing ? (
    <div
      className={styles.cardContainer}
      tabIndex={1}
      onDoubleClick={startEditing}
    >
      <div>{cardData.text}</div>
      <div className={styles.cardEditBtn}>
        <input type="button" value="Edit" onClick={startEditing} />
      </div>
    </div>
  ) : (
    <CreateOrEditTaskCard
      cardID={cardData.id}
      listID={listID}
      defaultCardText={cardData.text}
      mode="edit"
      onSubmit={stopEditing}
      onCancel={stopEditing}
    />
  );
}
