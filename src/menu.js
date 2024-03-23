import { useState, useEffect } from 'react';
import background from './assets/background.png';
import Moment from 'moment';
import 'moment/locale/fr';
import { local, githubGistsinfos } from './consts/variables';

function Menu() {
  const url = `https://api.github.com/gists/${githubGistsinfos.UUID}`;
  const [menus, setMenus] = useState();
    useEffect(() => {
      fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setMenus(JSON.parse(data.files[githubGistsinfos.filename].content));
    })
    .catch(function(error) {
      console.log(error);
    });
  }, []);

  const [imageDimensions, setImageDimensions] = useState({});
  
  useEffect(() => {
    loadImage(setImageDimensions, background);
  }, []);  

  /* Styles */
  var backgroundStyle = {
      height: imageDimensions.height,
      width: imageDimensions.width,
      backgroundImage: `url(${background})`
  };

  var titleStyle = {
    paddingTop: imageDimensions.height/2.5
  };

  var dateStyle = {
    top: imageDimensions.height/1.2
  };
  
  var menuInfos = undefined;
  if(menus !== undefined){
    menuInfos = menus.find(({ date }) => date === Moment().format("YYYY-MM-DD"));
  }

  if(menuInfos === undefined){
    menuInfos = {
      date : Moment(), 
      menu : "On fait des trucs"
    };
  }

  var localLocale = Moment(menuInfos.date);
  localLocale.locale(local);

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
  return( 
    <div>
    {Object.keys(imageDimensions).length === 0 ? (
      <p>&nbsp;</p>
    ) : (
      <>
      <div style={backgroundStyle}>
        <div className='title' style={titleStyle}>{menuInfos.menu}</div>
        <div className="date" style={dateStyle}>{localLocale.format('LL')}</div>
      </div>
      </>
    )}
    </div>);
}

export default Menu;