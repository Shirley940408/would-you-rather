import React from "react";
import { useHistory } from "react-router-dom";
import VerticalDivider from "./componentLab/VerticalDivider";
import Avatar from "./componentLab/Avatar";
import Button from "./componentLab/Button";
import styles from "./Question.module.css";
export default function question(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let history = useHistory();
  const votingQuestion = () => {
    const questionsArray = props.question.split(" or ");
    history.push("/voteNewQuestion", {
      optionOne: questionsArray[0],
      optionTwo: questionsArray[1],
      authorId: props.userId,
      author: props.user,
      src: props.src,
      qid: props.qid,
    });
  };
  return (
    <div className={styles.question}>
      <Avatar src={props.src} class={styles.avatar} />
      <VerticalDivider class={styles.verticalDivider} />
      <div className="template">
        <h3 className="title">Would you rather</h3>
        <div className={styles.paragraph}>{props.question}</div>
        <Button
          text="View Poll"
          class={styles.button}
          onClick={votingQuestion}
        />
      </div>
    </div>
  );
}
