import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducers/root-reducer";

import Container from "./containers/Container";

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

render(<App />, document.getElementById("app"));
