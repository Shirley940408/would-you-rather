import React from "react";
import Button from "./componentLab/Button";
import styles from "./ButtonCombo.module.css";
export default function ButtonCombo(props) {
  return (
    <div className={styles.container}>
      <Button
        text="Unanswered Question"
        class={styles.button}
        active={props.unanswered}
        onClick={props.onClick}
      />
      <Button
        text="Answered Question"
        class={styles.button}
        active={props.answered}
        onClick={props.onClick}
      />
    </div>
  );
}
