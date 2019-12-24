
// let name = `Hung`;
// console.log(name);
// let jsonName = JSON.stringify(name);
// console.log(jsonName);

// let number = 20;
// console.log(number);
// console.log(JSON.stringify(number));



// let subjects = JSON.parse(`["Html", "Css", "Javascript"]`);
// console.log(subjects);



// Ajax

let xmlHttp = new XMLHttpRequest();

xmlHttp.onreadystatechange = function(){
  if(this.readyState === 4 && this.status === 200){
    let weather = JSON.parse(this.responseText);
    console.log(weather.date);
    console.log(weather.temperature);
    console.log(weather.unit);
    document.getElementById("condition").innerHTML = weather.condition;
    document.getElementById("temp").innerHTML = 
    weather.date + '<br/>' + weather.temperature + '&deg;' + weather.unit;
  }
  
}

xmlHttp.open("get", "https://weather-data-demo.herokuapp.com/get-weather-today");

xmlHttp.send();

let conditionImg = {
  'Normal': 'https://cdn4.iconfinder.com/data/icons/weather-29/256/sun_simple_cloudy-256.png',
  'Bad': 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather06-256.png',
  'Nice': 'https://cdn2.iconfinder.com/data/icons/freecns-cumulus/32/519843-55_Sun-256.png'
}

let xmlHttpWeek = new XMLHttpRequest();
xmlHttpWeek.open('get', 'https://weather-data-demo.herokuapp.com/get-weather-week');
xmlHttpWeek.onreadystatechange = function(){
  if(this.status === 200 && this.readyState === 4){
    let week = JSON.parse(this.responseText);
    let s = '';
    for (let i = 0; i < week.length; i++) {
      const weather = week[i];
      s += `
      <div class="card" style="width:200px">
        <img class="card-img-top" width="250px" src="${conditionImg[weather.condition]}" alt="Card image">
        <div class="card-body">
          <h4 class="card-title" id="condition">${weather.condition}</h4>
          <p class="card-text" id="temp">
          ${weather.date}<br/>${weather.temperature}&deg;${weather.unit}
          </p>
        </div>
      </div>`;
    }
    document.getElementById('weather-week').innerHTML = s;
  }
}
xmlHttpWeek.send();



