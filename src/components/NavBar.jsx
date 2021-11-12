import React from "react";
import styles from "./NavBar.module.css";
import Avatar from "./componentLab/Avatar";
import { removeAuthedUser } from "../actions/removeAuthedUser";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import HorizontalDivider from "./componentLab/HorizontalDivider";
export default function NavBar() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);

  console.log(users, userId);
  return (
    <div className={styles.navbarContainer}>
      <NavLink
        to={{
          pathname: userId ? "/home" : "/",
          state: { prevRoute: userId ? "" : "/home" },
        }}
        className={styles.home}
      >
        Home
      </NavLink>
      <NavLink
        to={{
          pathname: userId ? "/add" : "/",
          state: { prevRoute: userId ? "" : "/add" },
        }}
        className={styles.newQuestion}
      >
        New Question
      </NavLink>
      <NavLink
        to={{
          pathname: userId ? "/leaderBoard" : "/",
          state: { prevRoute: userId ? "" : "/leaderBoard" },
        }}
        className={styles.leaderBoard}
      >
        Leader Board
      </NavLink>
      {users[userId] && (
        <div to="" className={styles.helloUser}>
          <div>{`Hello, ${users[userId].name}`}</div>
          <Avatar src={users[userId].avatarURL} />
        </div>
      )}
      <NavLink
        to="/"
        className={styles.logout}
        onClick={() => dispatch(removeAuthedUser())}
      >
        Logout
      </NavLink>
      <HorizontalDivider class={styles.bottomColor} />
    </div>
  );
}
