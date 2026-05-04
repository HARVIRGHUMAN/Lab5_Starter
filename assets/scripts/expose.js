// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const mainImage = document.querySelector('img');
  const audioElement = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', () => {
    const selectedHorn = hornSelect.value;
    mainImage.src = `assets/images/${selectedHorn}.svg`;
    mainImage.alt = selectedHorn;
    audioElement.src = `assets/audio/${selectedHorn}.mp3`;
  });
  
  volumeSlider.addEventListener('input', () => {
    const vol = volumeSlider.value;
    audioElement.volume = vol / 100;
    if(vol == 0 ) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume Level 0';
    } else if(vol >= 1 && vol < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume Level 1';
    } else if(vol >= 33 && vol < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume Level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume Level 3';
    }
  });

  playButton.addEventListener('click', () => {
    audioElement.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}