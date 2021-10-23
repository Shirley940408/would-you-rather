import React from "react";
import styles from "./HorizontalDivider.module.css";
const horizontalDivider = (props) => {
  return <div className={styles.horizontalDivider + " " + props.class}></div>;
};

export default horizontalDivider;
