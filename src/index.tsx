import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App from "./App";
import { resetContext, getContext } from "kea";
import sagaPlugin from "kea-saga";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

resetContext({
  createStore: true,
  plugins: [sagaPlugin({ useLegacyUnboundActions: true })]
});

const { store } = getContext();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
