function getCoordinates(lat, long) {
    var getWeather = new XMLHttpRequest();
    getWeather.addEventListener("load", reqListener);
    getWeather.open("GET", "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + long);
    getWeather.send();


}

navigator.geolocation.getCurrentPosition(function(position) {
  getCoordinates(position.coords.latitude, position.coords.longitude);
});

function reqListener () {
    console.log("API return", JSON.parse(this.responseText));
    const coord = JSON.parse(this.responseText)
    document.getElementById("country").innerHTML = coord.sys.country + ",";
    document.getElementById("city").innerHTML = coord.name;
    document.getElementById("temp").innerHTML = coord.main.temp + " " + "degrees";
}


