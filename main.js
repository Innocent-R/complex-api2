//Goal: Use data returned from one api to make a request to another api and display the data returned

//Search for news url
//adding event listener on the click 
//Creating input and url variables
//Make function for first url
//Fetch data from first url using new url
//Fetch information from first data using the new url
//display on the DOM


document.querySelector("#button").addEventListener("click", searchNews)

function searchNews(){
    const firstName = document.querySelector("#first").value
    const lastName = document.querySelector("#last").value
   
    sportsApi = `https://www.thesportsdb.com/api/v1/json/123/searchplayers.php?p=${firstName}_${lastName}`;

//fetch the first api   
fetch(sportsApi)
.then(res => res.json())
.then( players=> {
   console.log(players)
   console.log(players.player[0].strNationality)
        const nationality = players.player[0].strNationality
        
      const newUrl = `https://corsproxy.io/?url=https://newsapi.org/v2/everything?q=${nationality}&apiKey=609223d4416e4d3487d443dca85a200c`
//fetch the new url
      fetch(newUrl)
      .then(res => res.json())
      .then(data =>{
         console.log(data)
         console.log(data.articles[0].urlToImage,data.articles[0].title, data.articles[0].url, data.articles[0].description )
         const information = [data.articles[0].urlToImage,data.articles[0].title, data.articles[0].description, data.articles[0].url]
         document.querySelector('h2').innerText = information[1];
         document.querySelector('#image').src = information[0];
         document.querySelector('p').innerText = information[2];
          document.querySelector('a').href = information[3];
      })
   })
  .catch(error => console.log('error', error)); //catch errors that may occur
}

//Got a help form Meryem on how to target specific key values form the objest using array method


