const cityName = document.getElementById('enter');

cityName.addEventListener("keypress", (e) => {
    if(cityName.value != '' && e.key === "Enter"){
        getWeather(cityName.value);
    }
});


function getWeather(value){
    const API =  "06aeb0644227ab157330829caa9a5938";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API}`)
    .then(function (res) {
        return res.json();
    })
    .then(function(weather){
        document.querySelector('#city').innerHTML = weather.name;
        document.querySelector('#temp').innerHTML = Math.floor(weather.main?.temp - 273) + " °C";
    })
    .catch(function (error) {
        console.error('Error');
    })
}


