import React, { Component } from 'react';
import logo from './logo.svg';
import Async, { useAsync } from "react-async"

//import {DataJson} from './DataJson'
import './App.css';

import md5 from 'md5';

// It's my API, example:
const publickey = '53049753204b6dc4157a9e4e02921ef6';
const  privatekey = 'aa67cee82eccabf9abd26b56abe7128a94246da2';

const time = Number(new Date());
const hash = md5(time+privatekey+publickey);

const loadCharacter = async ({ characterId }, { signal }) => {
  const response = await fetch('https://gateway.marvel.com:443/v1/public/comics?ts='+time+'&apikey='+publickey+'&hash='+hash);
  if (!response.ok) throw new Error(response.statusText)
    return response.json();
}

class App extends Component {   
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      //items: new DataJson(),
      //totalReactPackages: items
    };
   // this.state.items = this.state.items.componentDidMount() 
   }


  
  render() {
    // See all react packages

    return (
      <div className='App'>
        <div className='App-header'>  
                    
        </div>
        <div className='grid-container'>
        <div className='grid-item'>
                  <div className="card">

                    <img src={logo} className="Comics-template" alt="comics" />            
                    <div className="card-info" alt="Avatar"/>
                      <h4></h4>
                    </div>
                  </div>
        </div>

                  <Async promiseFn={loadCharacter} characterId={1011334}>
                  <Async.Pending>Loading...</Async.Pending>
                  <Async.Fulfilled>
                      {data => (
                        <div className='resp'>
                          <strong>Player data:</strong>
                          <pre>
                          
                          {JSON.stringify(data, null, 2)}
                          
                          </pre>
                          </div> 
                      )}
                      

                  </Async.Fulfilled>
                  <Async.Rejected>{error => `Something went wrong: ${error.message}`}</Async.Rejected>
                </Async>
                
            
          </div>
 
      
    );
  }
}

export default App;
