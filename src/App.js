// import React, { useState } from 'react';
// import Timer from './timer';
// import {ReadTwitchMessages} from './twitchConnection';
import Menu from './menu';

export default function Main(){
  // const [timer, setTimer] = useState(null);

  // function timerEnd(timerDuration){
  //   setTimer(timerDuration);
  // }

  return (
      <>
        {/* <ReadTwitchMessages onTimerSet={setTimer} />
        {timer && <Timer maxDuration="30" onEnd={timerEnd} /> } */}
        <Menu title='Chaussons aux pommes' />
      </>
  );
}