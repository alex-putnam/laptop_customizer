import React, { Component } from "react";
import CartItem from "../CartItem/CartItem";

class CartList extends Component {
  render() {
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
      </div>
    );
  }
}

export default CartList;
