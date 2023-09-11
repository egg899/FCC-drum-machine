//import { useState } from 'react';
import './App.css';
import {AudioClip} from "./types";
import Drum from './Drum';
import * as React from 'react';



  
const audioClips: AudioClip[] = [
  {
    keyTrigger:"Q",
    url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Heater 1",
    check:false,
    
  },

  {
    keyTrigger: "W",
    url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description:"Heater 2",
    check:false,
  },
  {
    keyTrigger: "E",
    url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    description:"Heater 3",
    check:false,
  },
  {
    keyTrigger: "A",
    url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    description:"Heater 4",
    check:false,
  },

  {
    keyTrigger:"S",
    url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    description:"Clap",
    check:false,
  },
  {
    keyTrigger:"D",
    url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    description:"Open HH",
    check:false,
  },
  {
    keyTrigger:"Z",
    url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    description:"Kick n' Hat",
    check:false,
  },
  {
    keyTrigger:"X",
    url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    description:"Kick",
    check:false,
  },
  {
    keyTrigger:"C",
    url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    description:"Closed HH",
    check:false,
  },
];




function App() {
  // const [count, setCount] = useState(0)
 
  // const [disabled, setDisabled] = useState(false);
  // const [theColor, setTheColor] = useState('white');
  // const [buttonText, setButtonText] = useState('ON');

  
  
  // const bull = () =>{
  //   if(disabled == false && theColor=="white"){
      
      
  //     setDisabled(true);
  //     setTheColor('red');
  //     setButtonText('OFF');
      
  //   }else{
  //     setDisabled(false);
  //     setTheColor('white');
  //     setButtonText('ON');
  //   }
    
  //   console.log(disabled);
  //  }
   
   



  //  const audioClips: AudioClip[] = [
  //   {
  //     keyTrigger:"Q",
  //     url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  //     description: "Heater 1",
  //     check:disabled,
      
  //   },
  
  //   {
  //     keyTrigger: "W",
  //     url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  //     description:"Heater 2",
  //     check:disabled,
  //   },
  //   {
  //     keyTrigger: "E",
  //     url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  //     description:"Heater 3",
  //     check:disabled,
  //   },
  //   {
  //     keyTrigger: "A",
  //     url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  //     description:"Heater 4",
  //     check:disabled,
  //   },
  
  //   {
  //     keyTrigger:"S",
  //     url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  //     description:"Clap",
  //     check:disabled,
  //   },
  //   {
  //     keyTrigger:"D",
  //     url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  //     description:"Open HH",
  //     check:disabled,
  //   },
  //   {
  //     keyTrigger:"Z",
  //     url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  //     description:"Kick n' Hat",
  //     check:disabled,
  //   },
  //   {
  //     keyTrigger:"X",
  //     url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  //     description:"Kick",
  //     check:disabled,
  //   },
  //   {
  //     keyTrigger:"C",
  //     url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  //     description:"Closed HH",
  //     check:disabled,
  //   },
  // ];








 
  
  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>)=>{
    
    
    
    const clip = audioClips.find((clip)=>clip.keyTrigger === e.key.toUpperCase());

    if(!clip) return;
    
      
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
    .play()
    .catch(console.error);

    document.getElementById("drum-" + clip.keyTrigger)?.focus();
    document.getElementById("display")!.innerText= clip.description;  
  };

  



  return (
    
      <div className="container" id="drum-machine" onKeyDown={playAudio}>
        <h1>FCC Drum Machine</h1>
        <div className="whole-drum">

        {audioClips.map((clip)=>
            
            <Drum audioClip={clip} key={clip.keyTrigger} />
            
      )}
        </div>
          <div id="display"></div>
          <br/>
          
         {/* <button id="switch" onClick={bull} style={{backgroundColor:theColor }} >{buttonText}</button> */}
      </div>
    
  )
}

export default App
