import React from "react";
import Avatar from "./componentLab/Avatar";
import styles from "./List.module.css";
export default function List(props) {
  const whenClicked = () => {
    props.onClick(props.user);
    console.log("clicked: " + props.user);
  };

  return (
    <div className={styles.option} onClick={whenClicked}>
      <Avatar src={props.users[props.user].avatarURL} />
      <div>{props.users[props.user].name}</div>
    </div>
  );
}
