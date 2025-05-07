// 용산구청
const lat = 37.5324323903239;
const lon = 126.99057838531105;
const id = "1678d5fbe5655c5df4baca85f98cc3ed";

fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${id}&lang=kr`
).then(async (e) => {
  const json = await e.json();

  document.getElementById("temp").innerHTML = `${Math.round(
    json.main.temp - 273.15
  )}°C`;

  document.getElementById("humidity").innerHTML = `${json.main.humidity}%`;
  document.getElementById("wind").innerHTML = `${Math.round(
    json.wind.speed * 3.6
  )}km/h`;

  document
    .getElementsByTagName("h2")
    .item(0).innerHTML = `"${json.weather[0].description}"`;

  document.getElementById(
    "weather-img"
  ).src = `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`;
});
