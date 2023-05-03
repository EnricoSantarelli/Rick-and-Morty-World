"use client";
import React, { useContext } from "react";
import styles from "./create.module.scss";

export default function CreatePage() {
  return (
    <div className={styles.create}>
      <div className={styles.create__header}>
        <h1 className={styles.create__title}>Create</h1>
      </div>
      <div className={styles.create__card}></div>
    </div>
  );
}
