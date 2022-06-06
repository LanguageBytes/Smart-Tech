const apiKey = 'pub_7963ae1c89dc3ab50d1289e5f9f2201dfe26'
const apiUrl = `https://newsdata.io/api/1/news?apikey=pub_7963ae1c89dc3ab50d1289e5f9f2201dfe26&category=technology`
console.log(apiUrl);


      for (var i = 0; i < news.results.length; i++) {
       let resultArea = document.getElementById("results");
       let resultCard = document.createElement("div");
        resultCard.classList.add("card-body");
        resultArea.append(resultCard);

        // title
       let titleEl = document.createElement("a");
        titleEl.textContent = news.results[i].title;
        titleEl.setAttribute("style", "color: blue");
        titleEl.setAttribute("href", descriptionLink);
        resultCard.append(titleEl);

        // link
       let linkEl = document.createElement("div");
        linkEl.textContent = "Location: " + news.results[i].link;
        resultCard.append(linkEl);
    

      }