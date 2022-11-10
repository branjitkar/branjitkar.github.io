window.onload = initializePage;

let intervalDuration = 250; //milliseconds
let isTurboEnabled = false;
let frameDivider = "=====\n";

let animationManager;
let frames;
let currentFrameIndex;

let size = [];
size["Tiny"] = "7pt";
size["Small"] = "10pt";
size["Medium"] = "12pt";
size["Large"] = "16pt";
size["Extra Large"] = "24pt";
size["XXL"] = "32pt";

function initializePage() {
  setupEventHandlers();
}

function setupEventHandlers() {
  // event handler for animation change using animation dropdown
  document.getElementById("animation").onchange = setSelectedAnimation;

  // event handler for font size change
  document.getElementById("fontsize").onchange = setAsciiFontSize;

  //event handler for animation start
  document.getElementById("start").onclick = startAnimation;

  //event handler for animation stop
  document.getElementById("stop").onclick = stopAnimation;

  //event handler for turbo
  document.getElementById("turbo").onchange = toggleTurbo;
}

function setSelectedAnimation() {
  stopAnimation();
  let selection = document.getElementById("animation").value;
  document.getElementById("text-area").value = ANIMATIONS[selection];
}

function setAsciiFontSize() {
  let selectedSize = document.getElementById("fontsize").value;
  document.getElementById("text-area").style.fontSize = size[selectedSize];
}

function startAnimation() {
  let selectedAnimation = document.getElementById("text-area").value;
  frames = selectedAnimation.split(frameDivider);
  currentFrameIndex = 0;
  animationManager = setInterval(runFrames, intervalDuration);
  setControlEnable(true);
}

function runFrames() {
  document.getElementById("text-area").value = frames[currentFrameIndex];
  currentFrameIndex = (currentFrameIndex + 1) % frames.length;
}

function stopAnimation() {
  clearInterval(animationManager);
  restoreTextArea();
  setControlEnable(false);
}

function setControlEnable(animationRunning) {
  document.getElementById("start").disabled = animationRunning;
  document.getElementById("stop").disabled = !animationRunning;
  document.getElementById("animation").disabled = animationRunning;
  document.getElementById("text-area").disabled = animationRunning;
}

function restoreTextArea() {
  if (frames) {
    let selectedAnimation = frames.join(frameDivider);
    document.getElementById("text-area").value = selectedAnimation;
  }
}

function toggleTurbo() {
  isTurboEnabled = document.getElementById("turbo").checked;
  if (isTurboEnabled) {
    if (intervalDuration === 50) return;
    intervalDuration = 50;
  } else {
    if (intervalDuration === 250) return;
    intervalDuration = 250;
  }
  clearInterval(animationManager);
  animationManager = setInterval(runFrames, intervalDuration);
}
