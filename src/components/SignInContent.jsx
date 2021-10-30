import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./SignInContent.module.css";
import Button from "./componentLab/Button";
import List from "./List";
import { useHistory } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import { addAuthedUser } from "../actions/authedUser";
import usePrevious from "../utils/usePrevious";
export default function SignInContent(props) {
  const history = useHistory();
  const [listStatus, setListStatus] = useState(false);
  const [activeUser, setActiveUser] = useState("johndoe");
  const previousStatus = usePrevious(listStatus);
  const dispatch = useDispatch();
  const ListClicked = (userClicked) => {
    userClicked !== activeUser && setActiveUser(userClicked);
    setListStatus(false);
  };

  const saveUser = () => {
    dispatch(addAuthedUser(activeUser));
    history.push("/");
  };

  return (
    <div className={styles.template}>
      <img className={styles.image} src="./logo512.png" alt="" />
      <h3 className={styles.title}>Sign in</h3>
      <div className={styles.listContainer}>
        <div className={styles.select} onClick={() => setListStatus(true)}>
          <span>
            {previousStatus === false && listStatus === false
              ? "Select user"
              : props.users[activeUser]
              ? props.users[activeUser].name
              : "Select user"}
          </span>
          <img className={styles.icon} src="/images/clipboard.png" alt="" />
        </div>
        {listStatus && props.users && (
          <div className={styles.listArray}>
            {Object.keys(props.users).map((user) => (
              <List users={props.users} user={user} onClick={ListClicked} />
            ))}
          </div>
        )}
      </div>
      <Button text={"save"} class={styles.button} onClick={saveUser} />
    </div>
  );
}
