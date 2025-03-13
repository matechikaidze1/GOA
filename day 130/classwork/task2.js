document.getElementById('fetch-dog').addEventListener('click', async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      const dogImageUrl = data.message;
  
      const dogImage = document.createElement('img');
      dogImage.src = dogImageUrl;
      dogImage.alt = "dog";
  
      const container = document.getElementById('dog-container');
  
      container.appendChild(dogImage);
    } catch (error) {
      console.error('an error occured', error);
    }
  });
  