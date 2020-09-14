function load() {
  var elem = document.getElementById("myBar");
  var width = 10;
  var id = setInterval(frame, 10);

  function frame() {
    if (width >= 100) {
      clearInterval(id);
      ready();
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }

}

function ready() {
  document.getElementById("loading-area").style.opacity = '0';
  document.getElementById("load-button").style.opacity = '1';
}

function explore() {
  document.getElementById("load-button").style.opacity = '0';
}
