const fadeButton = document.createElement('button');
fadeButton.textContent = 'sliding block';
fadeButton.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);padding:10px 20px;font-size:16px;cursor:pointer;';
document.body.appendChild(fadeButton);

const slideBlock = document.createElement('div');
slideBlock.style.cssText = 'position:absolute;top:50%;left:-200px;width:200px;height:100px;background-color:#3498db;transition:left 1s;';
document.body.appendChild(slideBlock);

fadeButton.addEventListener('click', () => {
  const isVisible = slideBlock.style.left === '0px';
  slideBlock.style.left = isVisible ? '-200px' : '0px';
});
