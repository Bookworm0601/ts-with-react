import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import LikeButton from './components/LikeButton'
// import MouseTrack from './components/MouseTrack'
import useMousePosition from './hooks/useMousePosition'
import useUrlLoading from './hooks/useUrlLoading'

function App() {
  const [ showMouse, setShowMouse ] = useState(true)
  const position = useMousePosition()
  const [data, loading] = useUrlLoading('https://dog.ceo/api/breeds/image/random', [showMouse])
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
        { loading ?'👿加载中': <img src={data && data.message} alt=""/> }
        {/* <LikeButton /> */}
        <button onClick={ ()=> {setShowMouse(!showMouse)} }>切换狗狗图片</button>
      </header>
    </div>
  );
}

export default App;
