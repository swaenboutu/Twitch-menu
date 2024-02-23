import React, { useState, useEffect } from 'react';
import {ReadTwitchMessages} from './twitchConnection';
import Menu from './menu';
import { displayMenuDuration } from './consts/variables';

export default function Main(){
  const [displayMenu, setDisplayMenu] = useState(false);

  useEffect(() => {
    let handle;
    if (displayMenu) {
      handle = setTimeout(() => {
        setDisplayMenu(false);
      }, displayMenuDuration);
    }

    return () => {
      if (handle) {
        clearTimeout(handle);
      }
    }
  }, [displayMenu, setDisplayMenu])

  function messageReceived(){
    setDisplayMenu(true);
  }
    
  return (
      <>
        {<ReadTwitchMessages onTimerSet={messageReceived} />}
        {displayMenu ?
          <>
          <Menu />
          </>
        : null}
      </>
  );
}