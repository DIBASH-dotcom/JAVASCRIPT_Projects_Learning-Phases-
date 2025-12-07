<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Status Checker</title>
</head>
<body>
    <label>Name:</label>
    <input type="text" id="name" placeholder="enter your name"><br>
    <label>Age :</label>
    <input type="number" id="age" placeholder="enter your age"><br>

    <button onclick="checkage()">Check</button>

    <p id="result"></p>

    <script>
        function checkage() {
            let name =document.getElementById("name").value.toUpperCase();
            let age =parseInt(document.getElementById("age").value);

            if(name ===""|| isNaN(age)) {
                document.getElementById("result").innerHTML="Please enter vaild deatils";
document.getElementById("result").style.color="red";
return;            }

if(age<=0) {
    document.getElementById("result").innerHTML="Please enter a valid age 1  or above";
    document.getElementById("result").style.color="red";
    return;
}

if(age>=1 && age<=13) {
    document.getElementById("result").innerHTML="Hello "+name+", you are a child";
    document.getElementById("result").style.color="green";
    return;
}
else if(age>=14 && age<=19) {
    document.getElementById("result").innerHTML="Hello "+name+", you are a teenager";
    document.getElementById("result").style.color="green";
    return;
}

else if(age>=20 &&age<=59) {
    document.getElementById("result").innerHTML="Hello" +name+",your are adult";
    document.getElementById("result").style.color="green";
    return;
} 
else {
    document.getElementById("result").innerHTML="Hello "+name+" ,your age is "+age+",soyou are <bold>senior cizten</bold>";
    document.getElementById("result").style.color="green";
    return;
}       }
    </script>
</body>
</html>
