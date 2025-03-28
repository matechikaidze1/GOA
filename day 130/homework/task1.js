function JokeAdviceGenerator() {
    const app = document.createElement("div");
    app.style.textAlign = "center";
    app.style.marginTop = "50px";
  
    const title = document.createElement("h1");
    title.innerText = "joke and advice generator";
    app.appendChild(title);
  
    const jokeText = document.createElement("p");
    jokeText.innerText = "click for a joke";
    app.appendChild(jokeText);
  
    const jokeButton = document.createElement("button");
    jokeButton.innerText = "get joke";
    jokeButton.onclick = async () => {
      try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode");
        const data = await response.json();
        jokeText.innerText = data.type === "single" ? data.joke : `${data.setup} - ${data.delivery}`;
      } catch {
        jokeText.innerText = "error while getting a joke";
      }
    };
    app.appendChild(jokeButton);
  
    const adviceText = document.createElement("p");
    adviceText.innerText = "click for an advice";
    app.appendChild(adviceText);
  
    const adviceButton = document.createElement("button");
    adviceButton.innerText = "get advice";
    adviceButton.onclick = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        adviceText.innerText = data.slip.advice;
      } catch {
        adviceText.innerText = "error while getting an advice";
      }
    };
    app.appendChild(adviceButton);
  
    document.body.appendChild(app);
  }
  