import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* comment link
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
        </a> */}
      </header>
      <div className="grid-container">
        <div className="grid-item">
          <img src={logo} className="Comics-template" alt="comics" />
        </div>
        <div className="grid-item">
          <img src={logo} className="Comics-template" alt="comics" />
        </div>
        <div className="grid-item">
          <img src={logo} className="Comics-template" alt="comics" />
        </div>
        <div className="grid-item">
          <img src={logo} className="Comics-template" alt="comics" />
        </div>
        <div className="grid-item">
          <img src={logo} className="Comics-template" alt="comics" />
        </div>
        <div className="grid-item">
          <img src={logo} className="Comics-template" alt="comics" />
        </div>
      </div>
    </div>
  );
}

export default App;
