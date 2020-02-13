import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homer from './images/homer.jpg';
import Marge from './images/marge.png';
import Bart from './images/bart.png';
import Lisa from './images/lisa.png';
import Maggie from './images/maggie.png';
import Flanders from './images/flanders.png';
import Burns from './images/burns.jpg';
import Smithers from './images/smithers.png';


const title = {
  paddingTop: '50px',
  paddingBottom: '50px',
  textAlign: 'center'
}
const image = {
  width: '70%',
}

function Team(){
  return (
    <div>
    <h1 style={title}>The Simpsons Team</h1>
    <div className = "row">
    <div className = "col-md-3">
    <img src={Homer} alt="homer" style={image} />
    </div>
    <div className = "col-md-3">
    <img src={Marge} alt="marge" style={image} />
     </div>
    <div className = "col-md-3">
      <img src={Bart} alt="bart" style={image} />
     </div>
    <div className = "col-md-3">
    <img src={Lisa} alt="lisa" style={image} />
     </div>
    </div>
    <div className = 'row'>
    <div className = "col-md-3">
    <img src={Maggie} alt="maggie" style={image} />
    </div>
    <div className = "col-md-3">
    <img src={Flanders} alt="flanders" style={image} />
    </div>
    <div className = "col-md-3">
    <img src={Burns} alt="burns" style={image} />
    </div>
    <div className = "col-md-3">
    <img src={Smithers} alt="smithers" style={image} />
    </div>
    </div>
    </div>

  );
}

export default Team;
