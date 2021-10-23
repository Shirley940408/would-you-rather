import React from "react";
import styles from "./ButtonCombo.module.css";
export default function ButtonCombo() {
  return (
    <div className={styles.container}>
      <button>Unanswered Question</button>
      <button>Answered Question</button>
    </div>
  );
}
