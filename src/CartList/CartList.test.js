import React from "react";
import ReactDOM from "react-dom";
import CartBox from "./CartBox";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CartBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});
