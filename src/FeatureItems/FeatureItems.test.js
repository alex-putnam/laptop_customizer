import React from "react";
import ReactDOM from "react-dom";
import FeatureItems from "./FeatureItems";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FeatureItems />, div);
  ReactDOM.unmountComponentAtNode(div);
});
