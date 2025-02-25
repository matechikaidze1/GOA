function getRandomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function firstTask() {
    return new Promise((resolve) => {
      const delay = getRandomDelay(1000, 3000);
      setTimeout(() => {
        resolve("First");
      }, delay);
    });
  }
  
  firstTask()
    .then(message => {
      console.log(message);
      return new Promise((resolve) => {
        const delay = getRandomDelay(1000, 3000);
        setTimeout(() => {
          resolve("Second");
        }, delay);
      });
    })
    .then(secondMessage => {
      console.log(secondMessage);
    });
  