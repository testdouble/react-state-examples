import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

import List from "./List";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <List />
    </RecoilRoot>
  </React.StrictMode>,
  rootElement
);
