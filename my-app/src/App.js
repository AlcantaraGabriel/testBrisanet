import React, { Component } from 'react';
import md5 from 'md5';
import logo from './logo.svg';
import './App.css';

const publickey = '53049753204b6dc4157a9e4e02921ef6';
const  privatekey = 'aa67cee82eccabf9abd26b56abe7128a94246da2';

const time = Number(new Date());
const hash = md5(time+privatekey+publickey);


class App extends Component {   
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      totalReactPackages: null
    };

   }

   async componentDidMount() {
    const headers = {'Content-Type': 'application/json'}
    const response = await fetch('https://gateway.marvel.com:443/v1/public/characters?ts='+time+'&apikey='+publickey+'&hash='+hash, {headers});
    const dataJson = await response.json();
    this.setState({totalReactPackages: dataJson.data.results});
    //alert(data);
  }
  
  
  render() {
    // See all react packages
    const { totalPackages } = this.state;
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
          <div className="card">
              <img src={logo} className="Comics-template" alt="comics" />            
              <div className="card-info" alt="Avatar">
              <h4><b>Comics</b></h4>
              <p>Descrition</p>
            </div>
          </div>
        </div>
        <div className="grid-item">
        <div className="card">
              <img src={logo} className="Comics-template" alt="comics" />            
              <div className="card-info" alt="Avatar">
              <h4><b>sdkjosajd</b></h4>


            </div>
          </div>
        </div>
        
      </div>
      
    </div>
    
  );
    }
}

export default App;
