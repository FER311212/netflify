/* Partículas fondo */
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80 },
    "color": { "value": "#ff2020" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3 },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ff2020",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3
    }
  }
});

/* Efecto typing */
let text = "Dark Vault";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 150);
  }
}
typeWriter();

/* Sonido al click */
function playSound() {
  document.getElementById("click-sound").play();
}

/* AOS animación */
AOS.init();
