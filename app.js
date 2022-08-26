let audioPlaying=false
let progressEvent=undefined
let progressTrackRate=500


const getAudioDOM=()=>{
    return document.querySelector("#audio");
}
const getProgressDOM=()=>{
    return document.querySelector("#progress_circle");
}
const getProgressBlurDOM=()=>{
return document.querySelector("#progress_blur");
}
const startPlaying=(audioDom)=>{
audioDom.play();
audioPlaying=true;
startTrackingProgress(audioDom);
}
const stopPlaying=(audioDom)=>{
    audioDom.pause();
    audioPlaying=false;
    stopTrackingProgress(audioDom);
}

const canPlayAudio=()=>{
    const dom=getAudioDOM();
    if(audioPlaying){stopPlaying(dom);}
    else{startPlaying(dom);}
}

const startTrackingProgress=(audioDom)=>{
    let progressDom=getProgressDOM();
	let progBlurDom=getProgressBlurDOM();
    let total=audioDom.duration;
    const setProgress=()=>{
        let played=audioDom.currentTime/total;
        let converted=(played*75)+"%";
	    let conv2=(played*100)+"%";
        progressDom.style.left=converted;
        progBlurDom.style.width=conv2;
    }
    progressEvent=setInterval(setProgress,progressTrackRate);
}
const stopTrackingProgress=()=>{
    if(progressEvent!=undefined){
        clearInterval(progressEvent);
        progressEvent=undefined;
    }
}
