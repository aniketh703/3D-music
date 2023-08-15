const backgroundMusic = document.getElementById('backgroundMusic');
const toggleButton = document.getElementById('toggleButton');
const muteIcon = document.getElementById('muteIcon');
const unmuteIcon = document.getElementById('unmuteIcon');

toggleButton.addEventListener('click', () => {
    backgroundMusic.muted = !backgroundMusic.muted;
    
    // Toggle visibility of icons using the hidden attribute
    muteIcon.hidden = backgroundMusic.muted;
    unmuteIcon.hidden = !backgroundMusic.muted;
});
