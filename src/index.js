import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ScorePage from "./components/ScorePage";
import QuestionBoard from "./components/QuestionBoard";
import reportWebVitals from "./reportWebVitals";
import SignInContent from "./components/SignInContent";
import SignIn from "./components/SignIn";
import { createStore } from "redux";
import middleware from "./middleware";
import { Provider } from "react-redux";
import reducers from "./reducers";
const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <SignIn />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
