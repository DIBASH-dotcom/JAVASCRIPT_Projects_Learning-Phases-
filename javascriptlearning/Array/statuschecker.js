<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Age CHECKER</title>
</head>
<body>
    <h1>Category Checker By Age</h1>

    <label>Name:</label>
    <input type="text" id="name" placeholder="Enter Your Name"><br>

    <label>Age:</label>
    <input type="text" id="age" placeholder="Enter your age"><br>

    <button onclick="ageCalculate()">Check</button>

    <p id="result"></p>

    <script>
        function ageCalculate() {
            let name = document.getElementById("name").value.toUpperCase();
            let value = document.getElementById("age").value;

            if (name === "") {
                document.getElementById("result").innerHTML = "Please enter valid details";
                document.getElementById("result").style.color = "red";
                return;
            }

            if (value.trim() === "") {
                document.getElementById("result").innerHTML = "Please enter your age";
                document.getElementById("result").style.color = "red";
                return;
            }

            let age = parseInt(value);

            if (isNaN(age)) {
                document.getElementById("result").innerHTML = "Age must be a number";
                document.getElementById("result").style.color = "red";
                return;
            }

            let result = "";

            if (age >= 0 && age <= 12) {
                result = `Hello ${name}, you are a Child.`;
            }
            else if (age >= 13 && age <= 19) {
                result = `Hello ${name}, you are a Teenager.`;
            }
            else if (age >= 20 && age <= 59) {
                result = `Hello ${name}, you are an Adult.`;
            }
            else if (age >= 60) {
                result = `Hello ${name}, you are a Senior Citizen.`;
            }
            else {
                result = "Invalid age entered.";
            }

            document.getElementById("result").innerHTML = result;
            document.getElementById("result").style.color = "green";
        }
    </script>
</body>
</html>
