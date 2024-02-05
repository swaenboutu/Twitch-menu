import React, { useState } from 'react';
import {ReadTwitchMessages} from './twitchConnection';
import Menu from './menu';
import { displayMenuDuration } from './consts/variables';

export default function Main(){
  const [displayMenu, setDisplayMenu] = useState(false);

  function messageReceived(){
    setDisplayMenu(true);
    setInterval(() => {
      setDisplayMenu(false);
    }, displayMenuDuration);
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