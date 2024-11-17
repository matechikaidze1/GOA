const fadeButton = document.createElement('button');
fadeButton.textContent = 'click for sick magic';
fadeButton.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);padding:10px 20px;font-size:16px;cursor:pointer;opacity:1;';
document.body.appendChild(fadeButton);

function fade(element, fadeOut) {
  let opacity = fadeOut ? 1 : 0, targetOpacity = fadeOut ? 0 : 1, speed = 0.05;
  function animate() {
    opacity += fadeOut ? -speed : speed;
    if ((fadeOut && opacity <= targetOpacity) || (!fadeOut && opacity >= targetOpacity)) {
      opacity = targetOpacity;
      cancelAnimationFrame(id);
    }
    element.style.opacity = opacity;
    id = requestAnimationFrame(animate);
  }
  let id = requestAnimationFrame(animate);
}

fadeButton.addEventListener('click', () => fade(fadeButton, fadeButton.style.opacity == 1));
