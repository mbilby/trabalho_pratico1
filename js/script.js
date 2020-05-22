window.addEventListener('load', mudaCor);

function mudaCor() {
  red = document.querySelector('#rangeRed').value;
  green = document.querySelector('#rangeGreen').value;
  blue = document.querySelector('#rangeBlue').value;
  var color = 'rgb(' + red + ',' + green + ',' + blue + ')';

  document.querySelector('#saidaCor').style.backgroundColor = color;

  document.querySelector('#escalanumberRed').value = red;
  document.querySelector('#escalanumberGreen').value = green;
  document.querySelector('#escalanumberBlue').value = blue;
}

function reset() {
  var vred = document.querySelector('#rangeRed');
  vred.value = 0;
  var vgreen = document.querySelector('#rangeGreen');
  vgreen.value = 0;
  var vblue = document.querySelector('#rangeBlue');
  vblue.value = 0;
}

document.querySelector('#rangeRed').addEventListener('input', mudaCor);
document.querySelector('#rangeGreen').addEventListener('input', mudaCor);
document.querySelector('#rangeBlue').addEventListener('input', mudaCor);

reset();
