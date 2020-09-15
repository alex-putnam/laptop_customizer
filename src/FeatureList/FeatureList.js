import React, { Component } from "react";
import FeatureItems from "../FeatureItems/FeatureItems";
import slugify from "slugify";

class FeatureList extends Component {
  render() {
    return (
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>

        {this.props.features[this.props.feature].map((item, idx) => (
          <FeatureItems
            key={idx}
            item={item}
            itemHash={slugify(JSON.stringify(item))}
            options={this.props.options}
            feature={this.props.feature}
            updateFeature={this.props.updateFeature}
            selected={this.props.selected}
          />
        ))}
      </fieldset>
    );
  }
}

export default FeatureList;
