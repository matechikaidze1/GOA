const newDiv = document.createElement('div');

newDiv.textContent = 'text';
newDiv.className = 'class';

const parentElement = document.getElementById('something random');
parentElement.appendChild(newDiv);
