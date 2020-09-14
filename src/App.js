import React, { Component } from "react";
import "./App.css";
import FeatureBox from "./FeatureBox/FeatureBox";
import CartBox from "./CartBox/CartBox";
import FEATURES from "./FEATURES";

class App extends Component {
  state = {
    features: { FEATURES },
    selected: {
      Processor: {
        name: "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700,
      },
      "Operating System": {
        name: "Ubuntu Linux 16.04",
        cost: 200,
      },
      "Video Card": {
        name: "Toyota Corolla 1.5v",
        cost: 1150.98,
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500,
      },
    },
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };
  render() {
    console.log(FEATURES);

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>

        <main>
          <FeatureBox
            selected={this.state.selected}
            features={this.state.features.FEATURES}
            updateFeature={this.updateFeature}
          />

          <CartBox
            selected={this.state.selected}
            features={this.state.features.FEATURES}
          />
        </main>
      </div>
    );
  }
}

export default App;
