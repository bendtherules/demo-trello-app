import React, { useState } from "react";

import { CreateOrEditTaskCard } from "./CreateOrEditTaskCard";

import styles from "./TaskCard.module.css";

export function TaskCard({ cardData, listID }) {
  const [isEditing, setIsEditing] = useState(false);

  const stopEditing = () => setIsEditing(false);

  return !isEditing ? (
    <div
      className={styles.cardContainer}
      tabIndex={1}
      onDoubleClick={e => setIsEditing(true)}
    >
      {cardData.text}
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
