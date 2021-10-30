import React from "react";
import styles from "./NavBar.module.css";
import Avatar from "./componentLab/Avatar";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
export default function NavBar() {
  const location = useLocation();
  const userId = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);
  console.log(users, userId);
  return (
    <div className={styles.navbarContainer}>
      <NavLink to="/" className={styles.home}>
        Home
      </NavLink>
      <NavLink to="/newQuestion" className={styles.newQuestion}>
        New Question
      </NavLink>
      <NavLink to="/scorePage" className={styles.leaderBoard}>
        Leader Board
      </NavLink>
      {users[userId] && (
        <div to="" className={styles.helloUser}>
          <div>{`Hello, ${users[userId].name}`}</div>
          <Avatar src={users[userId].avatarURL} />
        </div>
      )}
      <NavLink to="/signIn" className={styles.logout}>
        Logout
      </NavLink>
    </div>
  );
}
