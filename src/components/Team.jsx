import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homer from './images/homer.jpg';
import Marge from './images/marge.png';
import Bart from './images/bart.png';
import Lisa from './images/lisa.png';
import Maggie from './images/maggie.png';
import Flanders from './images/flanders.png';
import Burns from './images/burns.png';
import Smithers from './images/smithers.png';
import Moe from './images/moe.png';
import Barney from './images/barney.png';
import Apu from './images/apu.png';
import Duffman from './images/duffman.png';
import Krusty from './images/krusty.png';
import Milhouse from './images/milhouse.png';
import Willie from './images/willie.png';
import Lionel from './images/Lionel.png';


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
    <h2 className = 'nameLine'>Homer</h2>
    <p className = "bio"> "Mmmmm Beer"</p>
    </div>
    <div className = "col-md-3">
    <img src={Marge} alt="marge" style={image} />
    <h2 className = 'nameLine'>Marge</h2>
    <p className = "bio"> "Oh Homie"</p>
     </div>
    <div className = "col-md-3">
      <img src={Bart} alt="bart" style={image} />
      <h2 className = 'nameLine'>Bart</h2>
      <p className = "bio"> "Eat my shorts, dude!"</p>
     </div>
    <div className = "col-md-3">
    <img src={Lisa} alt="lisa" style={image} />
    <h2 className = 'nameLine'>Lisa</h2>
    <p className = "bio"> "I learned that beneath my goodie two shoes lie some dark socks"</p>
     </div>
    </div>

    <div className = 'row'>
    <div className = "col-md-3">
    <img src={Maggie} alt="maggie" style={image} />
    <h2 className = 'nameLine'>Maggie</h2>
    <p className = "bio"> "smk smk"</p>
    </div>
    <div className = "col-md-3">
    <img src={Flanders} alt="flanders" style={image} />
    <h2 className = 'nameLine'>Flanders</h2>
    <p className = "bio"> "Hi-Diddily-Ho Neighborino"</p>
    </div>
    <div className = "col-md-3">
    <img src={Burns} alt="burns" style={image} />
    <h2 className = 'nameLine'>Mr. Burns</h2>
    <p className = "bio"> "Excellent"</p>
    </div>
    <div className = "col-md-3">
    <img src={Smithers} alt="smithers" style={image} />
    <h2 className = 'nameLine'>Smithers</h2>
    <p className = "bio"> "(nervous laughter)"</p>
    </div>
    </div>

    <div className = 'row'>
    <div className = "col-md-3">
    <img src={Moe} alt="moe" style={image} />
    <h2 className = 'nameLine'>Moe</h2>
    <p className = "bio"> "I've been called ugly, pug ugly, fugly, pug fugly, but never ugly ugly"</p>
    </div>
    <div className = "col-md-3">
    <img src={Barney} alt="barney" style={image} />
    <h2 className = 'nameLine'>Barney</h2>
    <p className = "bio"> "Beeeeeeeelch!"</p>
    </div>
    <div className = "col-md-3">
    <img src={Apu} alt="apu" style={image} />
    <h2 className = 'nameLine'>Apu</h2>
    <p className = "bio"> *CEO and purveyor</p>
    </div>
    <div className = "col-md-3">
    <img src={Duffman} alt="duffman" style={image} />
    <h2 className = 'nameLine'>Duffman</h2>
    <p className = "bio"> "Oh Yeahhh"</p>
    </div>
    </div>

    <div className = 'row'>
    <div className = "col-md-3">
    <img src={Krusty} alt="krusty" style={image} />
    <h2 className = 'nameLine'>Krusty</h2>
    </div>
    <div className = "col-md-3">
    <img src={Milhouse} alt="milhouse" style={image} />
    <h2 className = 'nameLine'>Milhouse</h2>
    <p className = "bio"> “But my mom says I'm cool.”</p>
    </div>
    <div className = "col-md-3">
    <img src={Willie} alt="willie" style={image} />
    <h2 className = 'nameLine'>Willie</h2>
    </div>
    <div className = "col-md-3">
    <img src={Lionel} alt="lionel" style={image} />
    <h2 className = 'nameLine'>Lionel</h2>
    </div>
    </div>
    </div>

  );
}

export default Team;
