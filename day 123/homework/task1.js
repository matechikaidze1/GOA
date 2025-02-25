function task1() {
    return new Promise((resolve) => {
      const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
      
      setTimeout(() => {
        resolve("rask 1 complete");
      }, delay);
    });
  }
  
  task1().then(message => console.log(message));
  