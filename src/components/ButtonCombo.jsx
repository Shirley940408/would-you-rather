import React from "react";
import Button from "./componentLab/Button";
import styles from "./ButtonCombo.module.css";
export default function ButtonCombo() {
  return (
    <div className={styles.container}>
      <Button text="Unanswered Question" class={styles.button} />
      <Button text="Answered Question" class={styles.button} active />
    </div>
  );
}
