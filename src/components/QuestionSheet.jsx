import React from "react";
import Question from "./Question";
import QuestionTop from "./QuestionTop";
import styles from "./QuestionSheet.module.css";
import ContainerCoat from "./componentLab/ContainerCoat";
export default function QuestionSheet(props) {
  console.log(props.questions);
  return (
    <div className={styles.questionInnercontainer}>
      {Object.keys(props.questions).map((question, index) =>
        ContainerCoat(
          Question,
          QuestionTop,
          {
            question:
              props.questions[question].optionOne.text +
              " or " +
              props.questions[question].optionTwo.text,
            src: props.users[props.questions[question].author].avatarURL,
            user: props.users[props.questions[question].author].name,
            userId: props.users[props.questions[question].author].id,
            qid: props.questions[question].id,
          },
          {
            text: props.users[props.questions[question].author].name + " ask",
          },
          Object.keys(props.questions).length - 1 === index
            ? styles.marginEnd
            : styles.marginAround,
          props.questions[question] && props.questions[question].id
        )
      )}
    </div>
  );
}
