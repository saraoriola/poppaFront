import React from 'react';
import './App.scss'; 

const App = () => {
  return (
    <div className="app-container">
    <h1 className="titulo">Título en Telegraf-UltraBold</h1>
    <p className="texto-light">Este es un texto en Telegraf-UltraLight.</p>
    <div className="colores-container">
      <div className="color-box cream-bg">Cream</div>
      <div className="color-box blue-bg">Blue</div>
      <div className="color-box gray-bg">Gray</div>
      <div className="color-box orange-bg">Orange</div>
    </div>
  </div>
  );
};

export default App;
