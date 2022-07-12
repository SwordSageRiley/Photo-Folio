import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

/*
Requirements
-looks good
-sections for vrchat, forza?, irl, magazines
-contact page
-comissions page
-about me page2
s
*/

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}



export default App;


/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <section className='menu'>
          
        </section>
      </body>

*/