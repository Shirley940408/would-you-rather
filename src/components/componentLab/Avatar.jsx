import React from "react";
import styles from "./Avatar.module.css";
export default function Avatar(props) {
  /**
   * props would only accept class with height and width.
   */
  console.log(props.class);
  return (
    <React.Fragment>
      <img
        src={props.src}
        alt={"avatar of user"}
        className={styles.avatar + " " + props.class}
      />
    </React.Fragment>
  );
}
