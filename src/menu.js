import { useState, useEffect } from 'react';
import background from './assets/background.png';


function Menu(props) {
  const loadImage = (setImageDimensions, imageUrl) => {
    const img = new Image();
    img.src = imageUrl;
  
    img.onload = () => {
      setImageDimensions({
        height: img.height,
        width: img.width
      });
    };
    img.onerror = (err) => {
      console.log("img error");
      console.error(err);
    };
  };

  const [imageDimensions, setImageDimensions] = useState({});
  useEffect(() => {
    loadImage(setImageDimensions, background);
  }, []);  

  var backgroundStyle= {
      height: imageDimensions.height,
      width: imageDimensions.width,
      backgroundImage: `url(${background})`
  };

    var titleStyle = {
      paddingTop: imageDimensions.height/2
    };

  return( 
    <div>
    {Object.keys(imageDimensions).length === 0 ? (
      <p>&nbsp;</p>
    ) : (
      <>
      <div style={backgroundStyle}>
        <div className='title' style={titleStyle}>{props.title}</div>
      </div>
      </>
    )}
    </div>);
}

export default Menu;