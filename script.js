//function to get selected country weather reports.
//If you want to change country please change lat & lon values in fetch url 
async function weather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=20&lon=77&appid=bea017799de33aeb106c1922c663f1db&units=metric`
    );
    let report = await response.json();
    // console.log(report);

    let container = document.createElement("div");
    container.setAttribute("class", "container");

    let row = document.createElement("div");
    row.setAttribute("class", "row");

    let col = document.createElement("div");
    col.setAttribute("class", "col m-5");

    let card = document.createElement("div");
    card.setAttribute("class", "card bs h-100");


    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body text-center");
    card.appendChild(cardBody);

    let country = document.createElement("h3");
    country.setAttribute("class", "card-text");
    country.innerText = ` Country Name : ${report.name} `;
    cardBody.appendChild(country);

    let temperature = document.createElement("h5");
    temperature.setAttribute("class", "card-text");
    temperature.innerText = `\n TEMPERATURE : ${report.main.temp} Celcius`;
    cardBody.appendChild(temperature);

    let feelsLike = document.createElement("h5");
    feelsLike.setAttribute("class", "card-text");
    feelsLike.innerText = `\n FEELS LIKE : ${report.main.feels_like}`;
    cardBody.appendChild(feelsLike);

    let groundLevel = document.createElement("h5");
    groundLevel.setAttribute("class", "card-text");
    groundLevel.innerText = `\n GROUND LEVEL : ${report.main.grnd_level}`;
    cardBody.appendChild(groundLevel);

    let humidity = document.createElement("h5");
    humidity.setAttribute("class", "card-text");
    humidity.innerText = `\n HUMIDITY : ${report.main.humidity}`;
    cardBody.appendChild(humidity);

    let pressure = document.createElement("h5");
    pressure.setAttribute("class", "card-text");
    pressure.innerText = `\n PRESSURE : ${report.main.pressure}`;
    cardBody.appendChild(pressure);

    let seaLevel = document.createElement("h5");
    seaLevel.setAttribute("class", "card-text");
    seaLevel.innerText = `\n SEA LEVEL : ${report.main.sea_level}`;
    cardBody.appendChild(seaLevel);

    col.appendChild(card);
    row.appendChild(col);
    container.appendChild(row);
    document.body.append(container);
  } catch (error) {
    console.log("Error while fetching API ! ", error);
  }
}
weather();