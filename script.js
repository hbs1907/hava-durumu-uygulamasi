
async function checkWeather(city) {
    const apiKey = "20d844e1add0132b681c54ae65b0cc41"; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (response.status == 404) {
        alert("Geçersiz şehir ismi! Lütfen tekrar deneyin.");
        
        
        document.querySelector(".city").innerHTML = "Şehir bulunamadı";
        document.querySelector(".temp").innerHTML = "--°C";
        return; 
    }

    

    document.querySelector(".city").innerHTML = data.name.replace("Province", "").trim();
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"  
    document.querySelector(".humidity").innerHTML = data.main.humidity + "% Nem"
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/s Rüzgar"
    
    console.log(data)

    const weatherIcon = document.querySelector(".weather-icon");
    if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/bulut.jpg";
    } else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/güneşlii.jpg";
    } else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.jpeg";
    } else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images/sis.jpg";
    }

   
    
}

checkWeather("Istanbul");

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value)

})



