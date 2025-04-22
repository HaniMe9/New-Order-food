// src/App.jsx
import React from 'react';
import './App.css'; // Custom styles
import Header from './components/Header/Header'; // Header with left logo
import FoodOrder from './components/FoodOrder/FoodOrder'; // Food ordering cards

function App() {
  return (
    <div className="App">
      <Header />
      <FoodOrder />
    </div>
  );
}

export default App;
