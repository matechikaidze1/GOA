const ball = document.createElement('div');
ball.style.cssText = 'position:absolute;width:100px;height:100px;border-radius:50%;background-color:#3498db;top:50%;left:50%;transform:translate(-50%, -50%);';
document.body.appendChild(ball);

let angle = 0;
function spin() {
  angle += 2; // spin speed for the ball
  ball.style.transform = `translate(-50%, -50%) rotateY(${angle}deg)`;
  requestAnimationFrame(spin);
}

spin();
