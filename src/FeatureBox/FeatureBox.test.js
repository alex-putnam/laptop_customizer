import React from "react";
import ReactDOM from "react-dom";
import FeatureBox from "./FeatureBox";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FeatureBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});
