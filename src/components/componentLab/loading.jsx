import React from "react";
import styles from "./loading.module.css";
export default function loading() {
  return (
    <div className={styles.ellipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
