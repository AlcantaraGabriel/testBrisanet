import React, { Component } from 'react';
import Modal from './components/Modal';

//require('dotenv').config()
import './App.css';
import logo from './logo.svg';
import md5 from 'md5';
import Async from "react-async"
//import { SectionList, StyleSheet, Text, View } from 'react-native';

//import {DataJson} from './DataJson'
// It's my API, example:
const publickey = '53049753204b6dc4157a9e4e02921ef6';
const  privatekey = 'aa67cee82eccabf9abd26b56abe7128a94246da2';

const time = Number(new Date());
const hash = md5(time+privatekey+publickey);

const loadComics = async ( { signal }) => {
   const response = await fetch('https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&orderBy=title&ts='+time+'&apikey='+publickey+'&hash='+hash);
   try{
     return response.json();
   }catch(err){
     return response.statusText;
   }
}


class App extends Component {

   
  constructor(props) {
    super(props);
    this.state = {
      cart: 0,
    };
    
    this.addCart = this.addCart.bind(this);
  }
  
  
   addCart = () => {
   	this.setState({ 
   		cart: this.state.cart + 1
   	});
   };
   
   removeCart = () => {
  	 this.setState({ 
   		cart: this.state.cart - 1
   	});
   };
   
   
   toggleModal = (id) => {
    const modal = document.getElementById(id);
    if(modal.classList.value === 'modal display-block'){
    
    modal.classList.value ='modal display-none';
    
    }else{
        modal.classList.value ='modal display-block';
    }


  }

   
  render() {
    // See all react packages
    
    return (
      <div className='App'>
        <div className='App-header'>  
                    <p>Magazines WebSite by Gabriel</p>
                   <p>Cart: {this.state.cart}</p>
        </div>

        <Async promiseFn={loadComics} >
          {({ data, error, isPending}) => {
          	if (isPending) return "Loading"
          	if (error) return `Something went wrong: ${error.message}`
          	if (data)
          	   return (
          	   	<div className={window.innerWidth > 500 ? "catalog" : "catalog-mobile"}>
          	   		{
		  	   		data.data.results.map((content, index) => (

		  	   		<div className="catalog-item" key={index}>
			  	   		<ol className={ window.innerWidth > 500 ? "card_li" : "card_li_mobile" } key={index}><br/><br/>
			  	   			<li className="thumbnail">
			  	   				<img className="imageComics" alt="images" src={content.thumbnail.path +'.' + content.thumbnail.extension || logo }/>
			  	   			</li>
			  	   			<li className="id" hidden>
								{content.id}          	   			
			  	   			</li>
			  	   			<li className="title">
								{content.title}          	   			
			  	   			</li>
			  	   			<br/><br/>
			  	   		 </ol>
			  	   		
	  	   	         <Modal idValue={content.id} divclassName={content.id}>
			  	   	         	
			  	   	           <p>
			  	   	             <img className="imageComics" alt="images" src={content.thumbnail.path +'.' + content.thumbnail.extension}/>
                     	        		   </p>
                     	        		   <p>
                     	        		      <label><b>Description:</b></label><br/>
                     	        		      {content.description}
                     	        		   </p>
                     	        		   <p>
                     	        		     <label><b>Price(USD):</b></label><br/> $ {content.prices[0].price}
                     	        		   </p>
                     	        		  </Modal> 
                   				
                   				<button className="btn" onClick={this.addCart} type="button" data-modal={'"'+content.id+'"'}>
                              		            Add
                    				</button>
                   				
                    				<button className="btn" onClick={() => this.toggleModal(content.id)} type="button"   >
                              		            Open
                    				</button>
                    				
          	   	   		</div>

          	   			)) //map
          	   		} 
          	   	     
          	   	</div>
          	   ) //return
          	return null
          }}
        </Async>
     </div>  
    );
    
    
    
  }
  
 
}


export default App;
