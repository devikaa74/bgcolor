import { useState } from 'react'
import './App.css'

function App() {

  const [bgColor, setBgColor] = useState('');

  const changeColorToRed = () => setBgColor('red');
  const changeColorToBlue = () => setBgColor('blue');
  const changeColorToGreen = () => setBgColor('green');

  return (
    <>
      <div className="container" style={{ backgroundColor: bgColor }}>
        <h1>Background Change App</h1>
        <div className="button-container">
          <button className="red-button" onClick={changeColorToRed}>Red</button>
          <button className="blue-button" onClick={changeColorToBlue}>Blue</button>
          <button className="green-button" onClick={changeColorToGreen}>Green</button>
        </div>
      </div>
    </>
  );
}

export default App;
