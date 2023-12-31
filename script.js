const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey ="f112ffd524d1f7938ad75467818c715f"
const searchBox = document.querySelector("input")
const searchBtn = document.querySelector("button")
async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`)
    var data = await response.json()
    console.log(data)
    document.querySelector(".country").innerHTML = data.sys.country
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "<sup>o</sup>C"
}
searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value)

})

// fetch("product.json").then((response)=> response.json() ).then((data)=> {products = data})