import React from "react";
import styles from "./VerticalDivider.module.css";
export default function verticalDivider(props) {
  return <div className={styles.verticalDivider + " " + props.class}></div>;
}
