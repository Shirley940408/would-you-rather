import React from "react";
import styles from "./ScoreSheet.module.css";
export default function scoreSheet(props) {
  return (
    <div className={styles.scoreSheet}>
      <span className={styles.scoreTitle}>Score</span>
      <div className={styles.scoreContent}>
        <div className={styles.scoreBubble}>{props.scores}</div>
      </div>
    </div>
  );
}
