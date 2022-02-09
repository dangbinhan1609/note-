import React, { Component } from "react";

export default class Baitap3 extends Component {
  state = {
    imgCar: "./img/imgRedCar.jpg",
  };

  changeCarColor = (color) => {
    const mapping = {
      red: "./img/imgRedCar.jpg",
      black: "./img/imgBlackCar.jpg",
      silver: "./img/imgSilverCar.jpg",
    };

    // color = "red"
    // mapping[color] <=> mapping['red'] <=> mapping.red
    const imgCar = mapping[color];


    this.setState({ imgCar });
  };

  render() {
    return (
      <div className="d-flex">
        <div className="w-50">
          <h3>Please choose your favorite about car's colors</h3>
          <img src={this.state.imgCar} alt="car" width="100%" />
        </div>
        <div className="w-50">
          <h2>Change color</h2>
          <button
            className="btn btn-danger mr-5"
            onClick={() => this.changeCarColor("red")}
          >
            Red
          </button>
          <button
            className="btn btn-dark mr-5"
            onClick={() => this.changeCarColor("black")}
          >
            Black
          </button>
          <button
            className="btn btn-secondary mr-5"
            onClick={() => this.changeCarColor("silver")}
          >
            Silver
          </button>
        </div>
      </div>
    );
  }
}
