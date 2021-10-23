import React from "react";
import VerticalDivider from "./componentLab/VerticalDivider";
import ScoreSheet from "./ScoreSheet";
import ContentPlate from "./ContentPlate";
import Avatar from "./componentLab/Avatar";
import styles from "./QuestionBlock.module.css";
const question = (props) => {
  return (
    <div className={styles.question}>
      <Avatar src={props.src} class={styles.avatar} />
      <VerticalDivider class={styles.verticalDivider} />
      <div className="template">
        <h3 className="title">{props.userName}</h3>
        <div>{props.question}</div>
      </div>
    </div>
  );
};

export default question;
