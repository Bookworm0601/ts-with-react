import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import LikeButton from './components/LikeButton'
// import MouseTrack from './components/MouseTrack'
import useMousePosition from './hooks/useMousePosition'

function App() {
  // const [ showMouse, setShowMouse ] = useState(true)
  const position = useMousePosition()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* {showMouse && <MouseTrack />} */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2>当前坐标: X:{position.x} Y:{position.y}</h2>
        {/* <LikeButton /> */}
        {/* <button onClick={ ()=> {setShowMouse(!showMouse)} }>切换鼠标点击案例显隐</button> */}
      </header>
    </div>
  );
}

export default App;
