import React, { Component } from "react";
import data from "./data.json";

export default class Baitap4 extends Component {
  state = {
    movies: data,
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.movies.map((item) => (
            <div key={item.maPhim} className="col-sm-4">
              <div className="card">
                <img className="card-img-top" src={item.hinhAnh} alt="movie" height="300px" />
                <div className="card-body">
                  <p className="card-title">{item.tenPhim}</p>
                  <p className="card-text">{item.moTa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
