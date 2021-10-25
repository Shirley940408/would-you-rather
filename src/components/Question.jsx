import React from "react";
import VerticalDivider from "./componentLab/VerticalDivider";
import Avatar from "./componentLab/Avatar";
import Button from "./componentLab/Button";
import styles from "./Question.module.css";
const question = (props) => {
  return (
    <div className={styles.question}>
      <Avatar src={props.src} class={styles.avatar} />
      <VerticalDivider class={styles.verticalDivider} />
      <div className="template">
        <h3 className="title">Would you rather</h3>
        <div className={styles.paragraph}>{props.question}</div>
        <Button text="View Poll" class={styles.button} />
      </div>
    </div>
  );
};

export default question;
