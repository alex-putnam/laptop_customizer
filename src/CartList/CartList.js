import React, { Component } from "react";
import CartItem from "../CartItem/CartItem";
import CartTotal from "../CartTotal/CartTotal";

class TotalList extends Component {
  render() {
    let total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );
    return (
      <div className="container">
        {Object.keys(this.props.selected).map((feature, idx) => (
          <CartItem
            key={idx}
            feature={feature}
            featureHash={feature + "-" + idx}
            selectedOption={this.props.selected[feature]}
          />
        ))}
        <CartTotal total={total} />
      </div>
    );
  }
}

export default TotalList;
