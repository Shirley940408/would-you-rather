import React from "react";
import styles from "./VotingResultContent.module.css";
import Avatar from "./componentLab/Avatar";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import VerticalDivider from "./componentLab/VerticalDivider";
const lightGreen = "#CDFFDD";
export default function VotingResultContent() {
  const questions = useSelector((state) => state.questions);
  const location = useLocation();
  const { answer, qid, src } = location.state;
  return (
    <div className={styles.container}>
      <Avatar src={src} class={styles.avatar} />
      <VerticalDivider class={styles.verticalDivider} />
      <div className={styles.template}>
        <h3 className="title">Results:</h3>
        <div
          className={styles.voteBlock}
          style={
            answer === "optionOne"
              ? {
                  backgroundColor: lightGreen,
                }
              : {}
          }
        >
          {answer === "optionOne" && (
            <div className={styles.yourVote}>Your vote</div>
          )}
          <div>{questions[qid].optionOne.text}</div>
          <div className={styles.votingBar}>
            <div
              className={styles.votingResult}
              style={{
                width: `${
                  (questions[qid].optionOne.votes.length * 100) /
                  (questions[qid].optionOne.votes.length +
                    questions[qid].optionTwo.votes.length)
                }%`,
              }}
            >
              {`${Math.round(
                (questions[qid].optionOne.votes.length * 100) /
                  (questions[qid].optionOne.votes.length +
                    questions[qid].optionTwo.votes.length)
              )}%`}
            </div>
          </div>
        </div>
        <div
          className={styles.voteBlock}
          style={
            answer === "optionTwo"
              ? {
                  backgroundColor: lightGreen,
                }
              : {}
          }
        >
          {answer === "optionTwo" && (
            <div className={styles.yourVote}>Your vote</div>
          )}
          <div>{questions[qid].optionOne.text}</div>
          <div className={styles.votingBar}>
            <div
              className={styles.votingResult}
              style={{
                width: `${
                  (questions[qid].optionTwo.votes.length * 100) /
                  (questions[qid].optionOne.votes.length +
                    questions[qid].optionTwo.votes.length)
                }%`,
              }}
            >
              {`${Math.round(
                (questions[qid].optionTwo.votes.length * 100) /
                  (questions[qid].optionOne.votes.length +
                    questions[qid].optionTwo.votes.length)
              )}%`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
