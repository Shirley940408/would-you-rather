import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { handleInitialData } from "../actions/shared";
import SignInTop from "./SignInTop";
import SignInContent from "./SignInContent";
import ContainerCoat from "./componentLab/ContainerCoat";
import styles from "./SignIn.module.css";
export default function SignIn(props) {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    try {
      dispatch(handleInitialData());
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  console.log("location:", props.location.state);
  return (
    <div>
      {ContainerCoat(
        SignInContent,
        SignInTop,
        {
          questions,
          users,
          prevRoute: location.state ? location.state.prevRoute : false,
        },
        {},
        styles.extra
      )}
    </div>
  );
}
