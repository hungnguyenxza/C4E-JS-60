
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



