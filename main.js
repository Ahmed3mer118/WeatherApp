/* 
    API ==> Application programming interface

    client  (request ) --->  server  

    client  <---- ( response )server

    JSON
    JavaScript Object Notation


    JSON.parse()
    json.strinfiy()


    Synchronous  === sync
    Asynchronous === async




*/




// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}
let apiKey = "f112ffd524d1f7938ad75467818c715f" 

// bom - dom
const searchBox = document.querySelector("input");
const searchBtn = document.querySelector("button")


async function clickWeather(city){
    const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`+ city +`&appid=${apiKey}`)
    var data = await response.json()
    console.log(data);

    document.querySelector(".country").innerHTML += data.sys.country
    document.querySelector(".city").innerHTML += data.name;
    document.querySelector(".temp").innerHTML += Math.round(data.main.temp )  + "<sup>o</sup>C"
    document.querySelector(".speed").innerHTML += data.wind.speed


}

// city = searchBox.value
searchBtn.addEventListener("click",()=>{
    clickWeather(searchBox.value)
    // console.log(searchBox.value);
})