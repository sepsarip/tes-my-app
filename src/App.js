import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import home from ""
import contact from ""

function App() {

  return(
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/" element={ <Contact/>} />
      </Routes>
    </div>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
