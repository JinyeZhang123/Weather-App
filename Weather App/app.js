function dispare(){
  document.getElementById("search").value="";
}

var form = document.querySelector(".Search");
form.addEventListener("submit", e=>{
    e.preventDefault();
    const inputVal = document.querySelector(".search-bar").value;
    fetch('http://api.openweathermap.org/geo/1.0/direct?q='+inputVal+'&limit=1&appid=af3f299047da764810b48aa0e1b50bae')
    .then(response => response.json())
    .then(data => {



    
        fetch('https://api.openweathermap.org/data/2.5/weather?lat='+data[0].lat+'&lon='+data[0].lon+'&appid=af3f299047da764810b48aa0e1b50bae')
        .then(response => response.json())
        .then(data => {
        console.log(data);


        var markup=`<h2 class="city-name">
        <span>${data.name}</span>
        <sup>${data.sys.country}</sup>
        </h2>
        <br>
        <span class="city-temp">${(data.main.temp-273).toFixed(1)}<sup>°C</sup></span>
        <figure>
        <img class="city-icon" src="${data.weather[0].main}.png" alt="${data.weather[0].main}">
        <figcaption>${data.weather[0].main}</figcaption>
        </figure>`;
        console.log(markup);



        var li=document.createElement("li");
        li.innerHTML=markup;
        document.querySelector(".list").appendChild(li);


        })
        .catch(() => {
          document.querySelector('.msg').innerHTML = "Please search for a valid city ";
        });


    })


  .catch(() => {
    document.querySelector('.msg').innerHTML = "Please search for a valid city ";
   
  });
})