let speechbtn = document.getElementById("speak");

const textInput = document.getElementById("input");

const Mcheck = document.getElementById("male");

const Fcheck = document.getElementById("female");

let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
}; 

speechbtn.onclick = () => {
    const text =textInput.value.trim();
    if (text) {
        const speech = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        // let selectedVoice;
        // if (Mcheck.checked) {
        //     selectedVoice = 'male'
        // }else if (Fcheck.checked) {
        //     selectedVoice = 'female'
        // }
        // let voice = voice;
        // voices.forEach((voice) = () => {
        //     if (voice.gender === selectedVoice) {
        //         utterance.voice = voice;
        //     }
        // });
        speech.speak(utterance);
    }
    }

