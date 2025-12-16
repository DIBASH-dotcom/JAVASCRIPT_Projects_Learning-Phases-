<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Result System</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f6fa;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }

        input, button {
            font-family: inherit;
        }

        body > * {
            box-sizing: border-box;
        }

        .container {
            background-color: #fff;
            padding: 30px 40px;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
            max-width: 500px;
            width: 100%;
        }

        h1 {
            text-align: center;
            margin-bottom: 25px;
            color: #333;
        }

        label {
            display: block;
            margin-top: 10px;
            margin-bottom: 5px;
            font-weight: 600;
            color: #444;
        }

        input[type="text"], input[type="number"] {
            width: 100%;
            padding: 10px 12px;
            border: 1.5px solid #ccc;
            border-radius: 6px;
            font-size: 15px;
            transition: all 0.2s ease;
        }

        input[type="text"]:focus, input[type="number"]:focus {
            border-color: #4e9af1;
            outline: none;
            box-shadow: 0 0 5px rgba(78, 154, 241, 0.4);
        }

        span {
            font-size: 13px;
            color: red;
            display: block;
            margin-bottom: 5px;
        }

        button {
            width: 100%;
            padding: 12px;
            margin-top: 15px;
            background-color: #4e9af1;
            color: #fff;
            font-size: 16px;
            font-weight: 600;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: 0.3s ease;
        }

        button:hover {
            background-color: #3b7cd1;
        }

        #result {
            text-align: center;
            margin-top: 20px;
            font-weight: 600;
            font-size: 16px;
        }

        @media(max-width: 550px) {
            .container {
                padding: 20px;
            }
        }
    </style>
</head>
<body>

<div class="container">
    <label>Student Name:</label>
    <input type="text" id="name" placeholder="Enter Your Name" oninput="StudentName()"><br><br>
     <span id="nameError"></span><br>

    <label>Subject 1 Name:</label>
    <input type="text" id="subject1" placeholder="Enter Subject 1 Name" oninput="subjectname()" ><br>
    <span id="subjecterror1"></span><br>

    <label>Marks:</label>
    <input type="number" id="marks1" placeholder="Enter Marks" oninput="marks()"><br><br>
     <span id="markserro1"></span><br>

    <label>Subject 2 Name:</label>
    <input type="text" id="subject2" placeholder="Enter Subject 2 Name" oninput="subjectname()" ><br>
  <span id="subjecterror2"></span><br>

    <label>Marks:</label>
    <input type="number" id="marks2" placeholder="Enter Marks" oninput="marks()"><br><br>
     <span id="markserro2"></span><br>

    <label>Subject 3 Name:</label>
    <input type="text" id="subject3" placeholder="Enter Subject 3 Name"  oninput="subjectname()" ><br>
    <span id="subjecterror3"></span><br>
    <label>Marks:</label>
    <input type="number" id="marks3" placeholder="Enter Marks" oninput="marks()"><br><br>
     <span id="markserro3"></span><br>

    <label>Subject 4 Name:</label>
    <input type="text" id="subject4" placeholder="Enter Subject 4 Name" oninput="subjectname()" ><br>
    <span id="subjecterror4"></span><br>
    <label>Marks:</label>
    <input type="number" id="marks4" placeholder="Enter Marks"oninput="marks()"><br><br>
     <span id="markserro4"></span><br>

    <label>Subject 5 Name:</label>
    <input type="text" id="subject5" placeholder="Enter Subject 5 Name" oninput="subjectname()" ><br>
    <span id="subjecterror5"></span><br>
    <label>Marks:</label>
    <input type="number" id="marks5" placeholder="Enter Marks" oninput="marks()"><br><br>
     <span id="markserro5"></span><br>

    <button onclick="checkResult()">Check Result</button>

    <p id="result"></p>
</div>

<script>

function StudentName() {
    let nameError = document.getElementById("nameError");
    let namepattern = /^[A-Za-z\s]+$/;
    let name = document.getElementById("name").value;

    if(!namepattern.test(name)) {
        nameError.innerText ="Invaild Name .Only leeters and soaces are alloowed like dibash,a,b,c";
        nameError.style.color ="red";
    }  else if(name.length <0) {
        nameError.innerText ="username is requirded";
        nameError.style.color ="red";
    } else {
        nameError.innerText ="";
    }

}

function marks() {
    let markserro1 = document.getElementById("markserro1");
    let markserro2 = document.getElementById("markserro2");
    let markserro3 = document.getElementById("markserro3");
    let markserro4 = document.getElementById("markserro4");
    let markserro5 = document.getElementById("markserro5");

    let marks1 = document.getElementById("marks1").value;
    let marks2 = document.getElementById("marks2").value;
    let marks3 = document.getElementById("marks3").value;
    let marks4 = document.getElementById("marks4").value;
    let marks5 = document.getElementById("marks5").value;

    
    markserro1.innerText = (marks1 < 0 || marks1 > 100) ? "Invalid Marks. Must be 0-100" : "";
    markserro2.innerText = (marks2 < 0 || marks2 > 100) ? "Invalid Marks. Must be 0-100" : "";
    markserro3.innerText = (marks3 < 0 || marks3 > 100) ? "Invalid Marks. Must be 0-100" : "";
    markserro4.innerText = (marks4 < 0 || marks4 > 100) ? "Invalid Marks. Must be 0-100" : "";
    markserro5.innerText = (marks5 < 0 || marks5 > 100) ? "Invalid Marks. Must be 0-100" : "";

    
    [markserro1, markserro2, markserro3, markserro4, markserro5].forEach(span => {
        if(span.innerText !== "") {
            span.style.color = "red";
        }
    });
}

function subjectname() { 

    let subjectpattern =  /^[A-Za-z\s]+$/;
   for(let i=1; i<5; i++) {
    let subject = document.getElementById("subject" + i).value;
    let subjecterror = document.getElementById("subjecterror" + i);

    if(!subjectpattern.test(subject)) {
        subjecterror.innerText = "Invaild Subject Name .Only leeters and spaxes are allowede like dibash,a,b,ac";
        subjecterror.style.color ="red";
    }
    else {
        subjecterror.innerText ="";
    }
    }
   }
   
  function checkResult() {
    let name = document.getElementById("name").value;
    let subject1 = document.getElementById("subject1").value;
    let subject2 = document.getElementById("subject2").value;
    let subject3 = document.getElementById("subject3").value;
    let subject4 = document.getElementById("subject4").value;
    let subject5 = document.getElementById("subject5").value;
    let marks1 = document.getElementById("marks1").value;
    let marks2 = document.getElementById("marks2").value;
    let marks3 = document.getElementById("marks3").value;
    let marks4 = document.getElementById("marks4").value;
    let marks5 = document.getElementById("marks5").value;

    let result = document.getElementById("result");

    
    if (
        name === "" || 
        subject1 === "" || subject2 === "" || subject3 === "" || subject4 === "" || subject5 === "" ||
        marks1 === "" || marks2 === "" || marks3 === "" || marks4 === "" || marks5 === "" ||
        marks1 < 0 || marks1 > 100 ||
        marks2 < 0 || marks2 > 100 ||
        marks3 < 0 || marks3 > 100 ||
        marks4 < 0 || marks4 > 100 ||
        marks5 < 0 || marks5 > 100
    ) {
        result.innerText = "Invalid fields. Please fill all correctly.";
        result.style.color = "red";
        return;
    }

    result.innerText = "All fields are valid!";
    result.style.color = "green";
}

</script>
</body>

</html>
