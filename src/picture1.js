import React from 'react';
import background from './assets/background.png'; // Tell webpack this JS file uses this image

function Picture1(props) {
  // Import result is the URL of your image
  return( 
    <div style={{backgroundImage: `url(${background})`, height:1523, width:1137}}>
        
        <span>{props.title}</span>
    </div>
  );
}

export default Picture1;