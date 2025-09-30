/*https://api.openweathermap.org/data/2.5/weather?q=germany&appid=cec46e00a3fadced1c635e22bae309d6&units=metric*/

const apiKey = "cec46e00a3fadced1c635e22bae309d6";
const units = "metric";
async function checkWeather() {
  const city = document.getElementById("locationInput").value;
  console.log(city);
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  const res = await fetch(apiUrl);
  const data = await res.json();
  console.log(data);
  const temp = data.main.temp;
  const feels_like = data.main.feels_like;
  const City = data.name;
  const country = data.sys.country;
  const wind = data.wind.speed;

  const sunriseUnix = data.sys.sunrise;
  const sunsetUnix = data.sys.sunset;

  const sunriseUTC = new Date(sunriseUnix * 1000);
  const sunsetUTC = new Date(sunsetUnix * 1000);

  const sunriseTime =
    sunriseUTC.getHours().toString().padStart(2, "0") +
    ":" +
    sunriseUTC.getMinutes().toString().padStart(2, "0");
  const sunsetTime =
    sunsetUTC.getHours().toString().padStart(2, "0") +
    ":" +
    sunsetUTC.getMinutes().toString().padStart(2, "0");

  const result = (document.querySelector(
    ".result"
  ).innerHTML = `<pre>${temp}°C</pre>
   <span>✿ Feels like :- ${feels_like}°C </span>
   <div class="bottom">
   <div id="k">
    ${City} <span>${country}</span></div>
    
  <div id="k"> ${wind} <span>m/s</span></div>
  </div>
  <div class="bottomText">
    <span>SunRise time:- ${sunriseTime} </span>   <span>
    SunSet time:- ${sunsetTime}</span>
    </div>
    `);

  const weatherBox = document.getElementById("weatherBox");
  if (temp <= 20) {
    weatherBox.src = "pexels-ekamelev-813871.jpg";
    weatherBox.alt = "sunny";
  } else if (temp > 20 && temp <= 30) {
    weatherBox.src = "pexels-akhil-saji-2152011731-33564685.jpg";
    weatherBox.alt = "cloudy";
  } else if (temp > 30) {
    weatherBox.src = "pexels-pixabay-301599.jpg";
    weatherBox.alt = "cloudy";
  }
}
weatherr();

checkWeather();
