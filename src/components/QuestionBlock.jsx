import React from "react";
import VerticalDivider from "./componentLab/VerticalDivider";
import ScoreSheet from "./ScoreSheet";
import ContentPlate from "./ContentPlate";
import Avatar from "./componentLab/Avatar";
import styles from "./QuestionBlock.module.css";
const questionBlock = (props) => {
  return (
    <div className="question">
      <Avatar src={props.src} class={styles.avatar} />
      <VerticalDivider class={styles.verticalDivider} />
      <div className="template">
        <h3 className="title">{props.userName}</h3>
        <ContentPlate questions={props.questions} answers={props.answers} />
      </div>
      <VerticalDivider class={styles.verticalDivider} />
      <ScoreSheet scores={props.answers + props.questions} />
    </div>
  );
};

export default questionBlock;
