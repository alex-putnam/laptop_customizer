import React, { Component } from "react";
import CartList from "../CartList/CartList";

class CartBox extends Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <CartList
          selected={this.props.selected}
          features={this.props.features}
        />
      </section>
    );
  }
}

export default CartBox;
