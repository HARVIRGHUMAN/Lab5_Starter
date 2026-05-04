// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const playButton = document.querySelector('button');
  const faceImage = document.querySelector('#explore img');

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;

      if (voice.default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  

  playButton.addEventListener('click', () => {
    const textToSpeak = textArea.value;
    if(!textToSpeak) return;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

    for(let i=0; i < voices.length; i++) {
      if(voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }

    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}