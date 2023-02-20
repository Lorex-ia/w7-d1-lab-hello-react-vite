// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import ironhackLogo from './assets/ironhack-logo-xs.png'
import menuTop from './assets/menu-top-xs.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

<div className="bluediv">
      <navbar className="nav">
          <div>
            <img src={ironhackLogo} className="logoIronhack" alt="Ironhack logo" />
          </div>
          <div className="menuTop">
            <img src={menuTop} className="burger" alt="menu top" />
          </div>
      </navbar>

      <div className="txtbtn">
        <h1> Say hello to ReactJS</h1>
        <p> You will learn how to use the most popular front-end library and become a super Ninja developer! </p>
          <button className="btn">
            Awesome!
          </button>
      </div>
</div>

<div className="icons">
    <div className="itxt">
      <img src={icon1} className="icon1"  />
      <h4>Declarative</h4>
      <p>React makes it painless to create interactive UIs.</p>
    </div>
    <div className="itxt">
      <img src={icon2} className="icon2"  />
      <h4>Components</h4>
      <p>Build encapsulated components that manage their state.</p>
    </div>
    <div className="itxt">
      <img src={icon3} className="icon3"  />
      <h4>Single-Way</h4>
      <p>React makes it painless to create interactive UIs.</p>
    </div>
    <div className="itxt">
      <img src={icon4} className="icon4" />
      <h4>JSX</h4>
      <p>React makes it painless to create interactive UIs.</p>
    </div>

</div>

    </div>
  )
}

export default App
