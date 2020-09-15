import React, { Component } from "react";
import CartList from "../CartList/CartList";
import CartTotal from "../CartTotal/CartTotal";

class CartBox extends Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <CartList
          selected={this.props.selected}
          features={this.props.features}
        />
        <CartTotal selected={this.props.selected} />
      </section>
    );
  }
}
CartBox.defaultProps = {
  selected: [],
};
export default CartBox;
