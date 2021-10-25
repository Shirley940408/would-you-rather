import React from "react";
import styles from "./Button.module.css";
export default function Button(props) {
  return (
    <button
      className={
        props.active
          ? styles.button + " " + styles.active + " " + props.class
          : styles.button + " " + props.class
      }
    >
      {props.text}
    </button>
  );
}
