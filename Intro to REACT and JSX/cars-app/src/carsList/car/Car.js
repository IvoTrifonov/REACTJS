import React, { Component } from 'react';

class Car extends Component {
  state = {
    owner: 'no one',
  }

  buyVehicle = (ev) => {
    ev.preventDefault();
    this.setState({
      owner: this.refs.input.value || 'no one',
    });
    this.refs.input.value = ''
  }

  render() {
    const { make, model, year, horsepower, doors, color } = this.props.car;
    return (
      <li>
        <h2><span>Make</span>: {make}</h2>
        <h4><span>Model</span>: {model}</h4>
        <p><span>Year</span>: {year}</p>
        <p><span>Horsepower</span>: {horsepower} hp.</p>
        <p><span>Doors</span>: {doors}</p>
        <p><span>Color</span>: {color}</p>
        <p><span>Owner</span>: {this.state.owner}</p>
        <form onSubmit={this.buyVehicle}>
          <input ref="input" placeholder="name..."></input>
          <button>Buy</button>
        </form>
      </li>
    )
  }

  componentDidUpdate() {
    console.log(this.state.owner);
  }
}

export default Car;