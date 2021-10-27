import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleInitialData } from "../actions/shared";
import SignInTop from "./SignInTop";
import SignInContent from "./SignInContent";
import ContainerCoat from "./componentLab/ContainerCoat";
import styles from "./SignIn.module.css";
export default function SignIn() {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(handleInitialData());
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  return (
    <div>
      {ContainerCoat(
        SignInContent,
        SignInTop,
        { questions, users },
        {},
        styles.extra
      )}
    </div>
  );
}
