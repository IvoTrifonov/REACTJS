import React from 'react';
import './App.css';
import Header from './header/Header';
import CarsList from './carsList/CarsList';
import cars from './db';


function App() {
  return (
    <div className="App">
      <Header isLoggedin={true}/>
      
      <CarsList cars={cars}/>
    </div>
  );
}

export default App;
