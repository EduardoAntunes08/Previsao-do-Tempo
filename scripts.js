

const key = "61889262cdaa39add5ec17bca72533f4"

function colocarDadosTela(dados) {
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".previus").innerHTML = dados.weather[0].description
    document.querySelector("humidity").innerHTML = "umidade " + dados.main.humidity + "%"
    document.querySelector(".img-previus").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}


async function searchCity(city) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    
    colocarDadosTela(dados)
}

function clickButton() {
    const city = document.querySelector(".input-city").value

    searchCity (city)
}