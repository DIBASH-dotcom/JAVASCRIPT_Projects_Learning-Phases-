<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR Generator</title>
</head>
<body>
    <label> Enter Your Name:</label>
    <input type="text" id="name" placeholder="Enter Your Name" oninput="name()">
    <span id="nameError"></span>
    

    <label> Enter Your Age:</label>
    <input type="number" id="age" placeholder="Enter Your Age" oninput="age()">
    <span id="ageError"></span>


    <label> Enter Your City :</label>
    <input type="text" id="city" placeholder="Enter your City" oninput="city()">
    <span id="cityError"></span>

    <button onclick="generateBtn()">Generate QR Code</button>
    <p id="result"></p>

    <script>

        function generateBtn(){
            let name = document.getElementById("name").value;
            let age = document.getElementById("age").value;
            let city = document.getElementById("city").value;

            let result = document.getElementById("result");

            if(name ==="" || age ==="" || city ==="") {
                result.innerHTML ="Please fill all the field";
                result.style.color ="red";
                return;
            }

        }

        function name() {
            let name = document.getElementById("name").value;
            let nameError = document.getElementById("nameError");
            if(name==="") {
            nameError.innerHTML="Name is reqyuirded";
        }
            if(name.length <=1) {
                nameError.innerHTML ="";
            } else {
                nameError.innerText="Name should be less than 1 characters";
                nameError.style.color="red";
            }

          
            }
        
    </script>
</body>
</html>
