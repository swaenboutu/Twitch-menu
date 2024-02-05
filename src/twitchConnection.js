import { useMemo, useState } from 'react';
import {channels } from './consts/variables';
const tmi = require('tmi.js');

function ReadTwitchMessages({onTimerSet: displayMenu}) {
    const [isConnected, setIsConnected] = useState(false);
    const client = useMemo(() => new tmi.Client({
        channels: channels
    }), []);

    if(isConnected === false)
    {
        client.connect().catch(console.error);
        setIsConnected(true);
    }
    
    client.on('message', (channel, tags, message, self) => {
        if (self) return;
        if(message.includes("!menu")){
            displayMenu();
        }
    }); 
}

export {ReadTwitchMessages};