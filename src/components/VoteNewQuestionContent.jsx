import React, { useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "./componentLab/Button";
import Avatar from "./componentLab/Avatar";
import { handleSaveVote } from "../actions/shared";
import VerticalDivider from "./componentLab/VerticalDivider";
import styles from "./VoteNewQuestionContent.module.css";
export default function VoteNewQuestionContent(props) {
  const params = useParams();
  const checkedValue = useRef(null);
  const authedUser = useSelector((state) => state.authedUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const selected = (e) => {
    console.log(e);
    if (e.target.checked) {
      checkedValue.current = e.target.value;
    }
  };
  const saveTheChoice = () => {
    console.log(props.author);
    if (checkedValue.current != null) {
      console.log(checkedValue.current);
      dispatch(
        handleSaveVote(
          authedUser,
          params.qid,
          checkedValue.current,
          history,
          props.src,
          props.author
        )
      );
    }
  };
  return (
    <div className={styles.question}>
      <Avatar src={props.src} class={styles.avatar} />
      <VerticalDivider class={styles.verticalDivider} />
      <div className="template">
        <h3>Would you rather...</h3>
        <div className={styles.textInput}>
          <input
            type="checkbox"
            className={styles.checkbox}
            value={"optionOne"}
            onChange={selected}
          />
          <p>{props.optionOne}</p>
        </div>
        <div className={styles.textInput}>
          <input
            type="checkbox"
            className={styles.checkbox}
            value={"optionTwo"}
            onChange={selected}
          />
          <p>{props.optionTwo}</p>
        </div>
        <Button text={"send"} class={styles.button} onClick={saveTheChoice} />
      </div>
    </div>
  );
}
