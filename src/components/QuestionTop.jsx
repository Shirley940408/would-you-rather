import React from "react";
import styles from "./QuestionTop.module.css";
export default function QuestionTop(props) {
  return <div className={styles.text + " " + props.class}>{props.text}</div>;
}
