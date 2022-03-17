const toggleControls = document.getElementById('toggle-controls-btn');
const controlsContainer = document.getElementsByClassName('controls');

function toggleControlsContainer() {
    controlsContainer[0].classList.toggle('visible');
}

toggleControls.addEventListener('click', toggleControlsContainer)