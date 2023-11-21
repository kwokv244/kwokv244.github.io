console.log ('hello')


let body = document.body;

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
}

let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);

const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX - 8; 
  const y = e.clientY - 8; 

  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
});

function toggleImage() {
  var image = document.getElementById('image');

  var isVisible = window.getComputedStyle(image).display !== 'none';
  image.style.display = isVisible ? 'none' : 'block';
}


