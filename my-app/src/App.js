import React, { Component } from 'react';
import logo from './logo.svg';
import {DataJson} from './DataJson'
import './App.css';

import md5 from 'md5';

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
      items: new DataJson(),
      //totalReactPackages: items
    };
    this.state.items = this.state.items.componentDidMount() 
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
                <h4><b>Comics</b></h4>
                <p>
                  <ul>
                    <li>{this.state.items[0]}</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
 
      </div>
    );
  }
}

export default App;
