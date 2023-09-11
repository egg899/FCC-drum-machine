import {AudioClip} from "./types";

interface DrumProps{
    audioClip: AudioClip;
   
}





 
  // const bull = () =>{
  //   if(check){
  //     check = false;
  //   }else{check = true;}
  //   console.log(check)
  // }

const Drum = ({audioClip}:DrumProps) => {

  
    const playSound = (clip:AudioClip)=>{
      
        (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
        .play()
        .catch(console.error);


        //document.getElementById("drum-" + Clipboard.keyTrigger)?.focus();

        document.getElementById("display")!.innerText= clip.description;  
    
        };
  

  return (
    <button disabled={audioClip.check}
    className="drum-pad" 
    id={`drum-${audioClip.keyTrigger}`}
    onClick={()=>playSound(audioClip)}>
        <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip"/>
   
        {audioClip.keyTrigger}
        
    </button>
  )
}

export default Drum
