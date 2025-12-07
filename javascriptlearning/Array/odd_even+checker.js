<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Odd or even checker</title>
</head>
<body>
    <h2>Odd and Even Chekcker</h2>


    <label> Enter a number :</label>
    <input type="number" id="num"><br>

    <button onclick="checkNum()">Check</button>

    <p id="result"></p>

    <script>
        function checkNum() {
            let value= document.getElementById("num").value;

            if(value ==="") {
                document.getElementById("result").innerHTML="Please enter a number";
                document.getElementById("result").style.color="red";
                return;
            }
//converting string to number
            let num=parseInt(value);

            if(num<0) {
                document.getElementById("result").innerHTML="Please enter a non-negative number";
                document.getElementById("result").style.color="red";
                return;
            }

            if(num === 0) {
                document.getElementById("result").innerHTML="0 is neither nota odd or even number";
                document.getElementById("result").style.color="blue";
                return;
            }

            if(num %2===0) {
                document.getElementById("result").innerHTML= num+ "is an even number";
                document.getElementById("result").style.color="green";
                return;
            }
            else {
                document.getElementById("result").innerHTML=num+" is an odd number";
            document.getElementById("result").style.color="green" ;
        return;           }
        }
    </script>
</body>
</html>
