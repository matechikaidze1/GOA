const cube = document.createElement('div');
document.body.appendChild(cube);

cube.style.position = 'absolute';
cube.style.width = '50px';
cube.style.height = '50px';
cube.style.backgroundColor = 'red';

let x = 0, y = 0;
const speed = 2;
const cubeSize = 50;
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

function moveCube() {
    x += speed;
    if (x >= screenWidth - cubeSize) {
        x = 0;
    }
    cube.style.left = x + 'px'; 
}

setInterval(moveCube, 16); // 16ms on 60fps
