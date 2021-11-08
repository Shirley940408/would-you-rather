import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import HorizontalDivider from "./componentLab/HorizontalDivider";
import Button from "./componentLab/Button";
import styles from "./CreateNewQuestionContent.module.css";
import { saveQuestion } from "../utils/api";
export default function CreateNewQuestionContent() {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const authedUser = useSelector((state) => state.authedUser);
  const history = useHistory();
  const handleClick = () => {
    return saveQuestion({
      optionOneText: inputOne,
      optionTwoText: inputTwo,
      author: authedUser,
    }).then(() => {
      history.push("/home");
    });
  };
  return (
    <div className={styles.content}>
      <div>Complete the questions:</div>
      <h3>Would you rather...</h3>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => setInputOne(e.target.value)}
      />
      <div className={styles.template}>
        <HorizontalDivider class={styles.dividerWidth} />
        <h3>OR</h3>
        <HorizontalDivider class={styles.dividerWidth} />
      </div>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => setInputTwo(e.target.value)}
      />
      <Button
        class={styles.button}
        text={"submit"}
        onClick={handleClick}
      ></Button>
    </div>
  );
}
