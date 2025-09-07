
// ------- Utilities -------
function randomRgb() {
  const r = Math.floor(Math.random() * 256); // 0-255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  // NOTE: tests expect spaces after commas
  return `rgb(${r}, ${g}, ${b})`;
}

// ------- Required functions (exact behaviors for tests) -------
function changeBackgroundColor() {
  document.body.style.backgroundColor = randomRgb();
}

function resetBackgroundColor() {
  // Tests expect an empty string (not "white")
  document.body.style.backgroundColor = '';
}

function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById('keyPressDisplay');
  if (!keyPressDisplay) return;
  const key = event?.key ?? '';
  keyPressDisplay.textContent = `Key pressed: ${key}`;
}

function displayUserInput() {
  const textInput = document.getElementById('textInput');
  const textInputDisplay = document.getElementById('textInputDisplay');
  if (!textInput || !textInputDisplay) return;
  textInputDisplay.textContent = `You typed: ${textInput.value}`;
}

// ------- Attach all listeners (called by tests after resetDOM) -------
function setupEventListeners() {
  const changeColorButton = document.getElementById('changeColorButton');
  const resetColorButton = document.getElementById('resetColorButton');
  const textInput = document.getElementById('textInput');

  if (changeColorButton) {
    changeColorButton.addEventListener('click', changeBackgroundColor);
  }

  if (resetColorButton) {
    // Double-click to reset
    resetColorButton.addEventListener('dblclick', resetBackgroundColor);
  }

  // Keydown on the whole document
  document.addEventListener('keydown', (e) => {
    displayKeyPress(e);
  });

  if (textInput) {
    textInput.addEventListener('input', () => {
      displayUserInput();
    });
  }
}

// ------- Exports for Jest -------
if (typeof module !== 'undefined') {
  module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners,
  };
} 