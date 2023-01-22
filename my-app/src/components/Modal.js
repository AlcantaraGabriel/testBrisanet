import './CSS/Modal.css';
import openMap from 'react-native-open-maps';

const showPostion = function(pos: any){
 	openMap({ latitude: pos.coords.latitude, longitude: pos.coords.longitude });
 	//pos.coords.accuracy
 }

const location =  function () {
 	if (navigator.geolocation) {
  		const postion =   navigator.geolocation.getCurrentPosition(showPostion);
  		return postion;
	}
}


const Modal = ({ idValue, divclassName, children }) => {


   const toggleModal = (id) => {
    const modal = document.getElementById(id);
    if(modal.classList.value === 'modal display-block'){
    
    modal.classList.value ='modal display-none';
    
    }else{
        modal.classList.value ='modal display-block';
    }

  }



  return (
    <div id={idValue} className="modal display-none" >
    
      <section id={idValue} className={"modal-main-"+divclassName}>
        {children}
        <p>
        	<button className="btn" onClick={() => location()}>Show on the Maps</button>
        	<button className="btn" onClick={() => toggleModal(idValue)} type="button"   >
                              		            Close
                </button>
        </p>
      </section>
    </div>
  );
};

export default Modal;
