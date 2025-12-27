<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>

    <style>
        * {
            box-sizing: border-box;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
        }

        body {
            min-height: 100vh;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #4facfe, #00f2fe);
        }

        .app {
            background: #ffffff;
            padding: 24px 28px;
            width: 100%;
            max-width: 360px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
            text-align: center;
        }

        h1 {
            margin-bottom: 20px;
            font-size: 1.6rem;
            color: #333;
        }

        label {
            display: block;
            text-align: left;
            font-size: 0.9rem;
            margin-bottom: 6px;
            color: #555;
        }

        input {
            width: 100%;
            padding: 10px 12px;
            border-radius: 8px;
            border: 1px solid #ccc;
            font-size: 1rem;
            outline: none;
        }

        input:focus {
            border-color: #4facfe;
            box-shadow: 0 0 0 3px rgba(79,172,254,0.2);
        }

        button {
            margin-top: 16px;
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 8px;
            background: #4facfe;
            color: #fff;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s ease;
        }

        button:hover {
            background: #3498db;
        }

        #result {
            margin-top: 14px;
            font-size: 0.95rem;
        }
    </style>
</head>
<body>

    <div class="app">
        <h1>Weather App</h1>

        <label>ENTER A CITY NAME:</label>
        <input type="text" id="name" placeholder="Enter a City Name">

        <button onclick="Checker()">Check</button>
        <p id="result"></p>
    </div>

    <script>
        async function Checker() {

            let city = document.getElementById("name").value;
            let result = document.getElementById("result");

            if (city === "") {
                result.innerHTML = "Please Enter a City Name";
                result.style.color = "red";
                return;
            }

            let api = "d"; 

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;

            try {
                let response = await fetch(url);
                if (!response.ok) throw new Error("City Not Found");

                let data = await response.json();

                alert(`City: ${data.name}
Temperature: ${data.main.temp}°C
Weather: ${data.weather[0].description}`);

            } catch (err) {
                result.innerHTML = err.message;
                result.style.color = "red";
            }
        }
    </script>
</body>
</html>

