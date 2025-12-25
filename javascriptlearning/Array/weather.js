<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
</head>
<body>
    <h1> Weather App</h1>

    <label>ENTER A CITY NAME: </label>
    <input type="text" id="name" placeholder="Enter a City Name">

    <button onclick="Checker()">Check</button>
    <p id="result"></p>

    <script>

        async function Checker() {

            let city=document.getElementById("name").value;
            let result=document.getElementById("result");


            if(city==="") {
            result.innerHTML="Please Enter a City Name";
            result.style.color="red";
            return true;

            }

            //upload a api 

            let api="d543ad44a8bb9696dad679991c58f8de" ///enter your aPi Key 

             let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;


             try {
                let response = await fetch(url);
                if(!response.ok)  throw new Error("City Not Found");

                let data = await response.json();

               alert(`City: ${data.name}
Temperature: ${data.main.temp}°C
Weather: ${data.weather[0].description}`);

             }
 catch(err) {
       result.innerHTML = err.message;
        result.style.color = "red";
    }


        }
    </script>
</body>
</html>
