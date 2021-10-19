import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleInitialData } from "../actions/shared";
function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  useEffect(() => {
    try {
      dispatch(handleInitialData());
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);

  return <div>Hello</div>;
}

export default App;
