<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grade Calculator</title>
</head>
<body>
 <h1> Grade Calculator</h1> 
 
 
 <label> Subject 1:</label>
 <input type="number" id="s1"><br><br>

 <label>Subject2:</label>
 <input type="number" id="s2"><br><br>

 <label>Subject 3</label>
 <input type="number" id="s3"><br><br>

 <label>Subject 4:</label>
 <input type="number" id="s4"><br><br>

 <label>Subject 5:</label>
 <input type="number" id="s5"><br><br>

 <button onclick="calculate()">Check Result</button>

 <h2> Result</h2>
 <p id="result"></p>

 <script>

    function calculate(){
        let marks1 = parseInt(document.getElementById("s1").value);
        let marks2=parseInt(document.getElementById("s2").value);
        let marks3= parseInt(document.getElementById("s3").value);
        let marks4=parseInt(document.getElementById("s4").value);
        let marks5 =parseInt(document.getElementById("s5").value);

if(isNaN(marks1) || isNaN(marks2) || isNaN(marks3) || isNaN(marks4) || isNaN(marks5)) {
    document.getElementById("result").innerHTML="Please Enter vaild deatils";
    document.getElementById("result").style.color="red";
    return;
}
        if(marks1<40 ||marks2<40|| marks3<40 || marks4<40 || marks5<40) {
            document.getElementById("result").innerHTML="Fail(Low Marks)";
            document.getElementById("result").style.color="red";
            return;
        }

        let total = marks1 + marks2 + marks3 + marks4 + marks5;
        let percentage = total/5;

        let grade ="";
        if(percentage>= 90)
        grade ="A+";
    else if(percentage>=80)
    grade="A";
else if(percentage>=70)
grade="B+";
else if(percentage>=60)
grade="B";
else if(percentage>=50)
grade="C";
else grade="F";

let finalresult = (grade==="F") ? "Fail" :"Pass";

document.getElementById("result").innerHTML=`
Total Marks : ${total} <br>
Percentage : ${percentage}% <br>
Grade : ${grade}<br>
Final Result : ${finalresult}
    `;
    document.getElementById("result").style.color=(finalresult ==="Fail")?"red" :"blue";
    }
 </script>
</body>
</html>
