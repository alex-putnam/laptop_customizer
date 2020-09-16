import React from "react";
import ReactDOM from "react-dom";
import FeatureList from "./FeatureList";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FeatureList feature={"a"} features={{ a: [] }} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
