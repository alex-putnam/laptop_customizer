import React from "react";
import ReactDOM from "react-dom";
import FeatureItems from "./FeatureItems";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <FeatureItems
      item={{ name: "" }}
      selected={{ a: { name: "" } }}
      feature={"a"}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
