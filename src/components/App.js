import React, { useEffect } from "react";
import { handleInitialData } from "../actions/shared";
function App() {
  useEffect(() => {
    try {
      handleInitialData();
    } catch (e) {
      console.log(e);
    }
  }, []);
  // useEffect(() => {
  //   try {
  //     async function fetchData() {
  //       const { questions, users } = await getInitialData();
  //       const getQuestions = await questions();
  //       const getUsers = await users();
  //       console.log(getQuestions, getUsers);
  //     }
  //     fetchData();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, []);
  return <div>Hello</div>;
}

export default App;
