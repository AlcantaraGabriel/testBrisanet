import React, { Component } from 'react';
import logo from './logo.svg';
import Async, { useAsync } from "react-async"
//import { SectionList, StyleSheet, Text, View } from 'react-native';

//import {DataJson} from './DataJson'
import './App.css';

import md5 from 'md5';

const publickey = '53049753204b6dc4157a9e4e02921ef6';
const  privatekey = 'aa67cee82eccabf9abd26b56abe7128a94246da2';
// AIzaSyBHSUEp14j5KEOlOrx93LIr7FEZueD9rv0
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&
// types=food&name=harbour&key=AIzaSyBHSUEp14j5KEOlOrx93LIr7FEZueD9rv0

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
                {/* <div className="card-info" alt="Avatar"/> */}
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
                      
                      {JSON.stringify(data.data.results, null, 2).split(",").map((i, index) => 
                       <ul>
                        {i.split("id:").map((j) =>
                           // "id": 82967, "title": "Marvel Previews (2017)"
                           // } ]"thumbnail": { "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada""extension": "jpg" }
                           // "images": [ { "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada" "extension": "jpg" } ]
                           <li>{j}</li>
                         )}
                       </ul>   
                    
                      )};
                      
                </div> 
              )}
            </Async.Fulfilled>
          <Async.Rejected>{error => `Something went wrong: ${error.message}`}</Async.Rejected>
        </Async>
                
            
    </div>
 
      
    );
  }
}

/* const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
*/
export default App;
