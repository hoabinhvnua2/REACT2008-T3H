import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/index.reducer";
import { configureFakeBackend } from "./helper/fake-backend";
import { initFacebookSdk } from "./helper/init-fb-sdk";
import createSagaMiddleware from 'redux-saga';
import sagas from './redux/saga';
import { composeWithDevTools } from 'redux-devtools-extension';
configureFakeBackend();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(sagas);

initFacebookSdk().then(app);

function app() {
  render(
    <Provider store={store}>
      {/* <Router history={history}> */}
      <App />
      {/* </Router> */}
    </Provider>,
    document.getElementById("root")
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
