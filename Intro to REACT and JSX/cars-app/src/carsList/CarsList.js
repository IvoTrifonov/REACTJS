import React, { Component } from 'react';
import Car from './car/Car';

class CarsList extends Component {
  render() {
    return (
      <ul className="cars-list">
        { this.props.cars.map(car => <Car key={car.id} car={car}/>)}
      </ul>
    )
  }
}

export default CarsList;