"use client";
import React, { useContext } from "react";
import styles from "./create.module.scss";

export default function CreatePage() {
  return (
    <div className={styles.create}>
      <div className={styles.create__header}>
        <h1 className={styles.create__title}>Create</h1>
      </div>
      <div className={styles.create__card}>
      <div className={styles.create__image} />
              <div className={styles.create__attributes}>
                <div className={styles.create__div}>
                  <div className={styles.create__gender}>
                    <h2 className={styles.create__title}>Gender</h2>
                  </div>
                  <div className={styles.create__species}>
                    <h2 className={styles.create__title}>Specie</h2>
                  </div>
                </div>
                <div className={styles.create__origin}>
                  <h2 className={styles.create__title}>Origin</h2>
                </div>
                <div className={styles.create__status}>
                  <div
                    className={styles.create__unknown
                    }
                  />
                  <h2 className={styles.create__span}>
                  </h2>
                </div>
              </div>
      </div>
    </div>
  );
}
