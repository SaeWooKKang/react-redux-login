const React = require("react");
const ReactDOM = require("react-dom");
const { Provider } = require("react-redux");

import App from "./App";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// 현재 webpack으로 번들링은 정상 작동 하는데,
// webpack-dev-server가 작동 안 함

// 바꾼게 없는데 작동하네 ;; 참나

// store import를 잘못했었음
// import export 짝을 맞춰야 하는듯?
