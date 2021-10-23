import React from "react";
import HorizontalDivider from "./componentLab/HorizontalDivider";
import styles from "./ContentPlate.module.css";
export default function contentPlate(props) {
  return (
    <div className="content">
      <div className="text">
        <span>Answer questions</span>
        <span>{props.answers}</span>
      </div>
      <HorizontalDivider class={styles.horizontalDivider} />
      <div className="text">
        <span>Create questions</span>
        <span>{props.questions}</span>
      </div>
    </div>
  );
}
