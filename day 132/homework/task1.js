function NewsApp() {
    const app = document.createElement("div");
    app.style.textAlign = "center";
    app.style.marginTop = "50px";
    
    const title = document.createElement("h1");
    title.innerText = "latest news";
    app.appendChild(title);
    
    const newsContainer = document.createElement("div");
    newsContainer.style.marginTop = "20px";
    app.appendChild(newsContainer);
    
    async function fetchNews() {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        const data = await response.json();
        
        newsContainer.innerHTML = "";
        
        if (data.articles) {
          data.articles.slice(0, 5).forEach(article => {
            const articleDiv = document.createElement("div");
            articleDiv.style.marginBottom = "20px";
            articleDiv.style.padding = "10px";
            articleDiv.style.border = "1px solid #ddd";
            articleDiv.style.borderRadius = "5px";
            
            const title = document.createElement("h3");
            title.innerText = article.title;
            articleDiv.appendChild(title);
            
            if (article.urlToImage) {
              const image = document.createElement("img");
              image.src = article.urlToImage;
              image.style.width = "100%";
              image.style.maxHeight = "200px";
              image.style.objectFit = "cover";
              articleDiv.appendChild(image);
            }
            
            const link = document.createElement("a");
            link.href = article.url;
            link.innerText = "read more";
            link.style.display = "block";
            link.style.marginTop = "10px";
            
            articleDiv.appendChild(link);
            newsContainer.appendChild(articleDiv);
          });
        } else {
          newsContainer.innerText = "no news found";
        }
      } catch {
        newsContainer.innerText = "error while getting news";
      }
    }
    
    fetchNews();
    document.body.appendChild(app);
  }
  
  NewsApp();
  