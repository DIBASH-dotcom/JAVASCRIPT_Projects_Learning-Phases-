<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Result System</title>
</head>
<body>

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

    let subject1 = document.getElementById("subject1").value;
    let subject2 = document.getElementById("subject2").value;
    let subject3 = document.getElementById("subject3").value;
    let subject4 = document.getElementById("subject4").value;
    let subject5 = document.getElementById("subject5").value;

    
    let subjecterror1 = document.getElementById("subjecterror1");
    let subjecterror2 = document.getElementById("subjecterror2");
    let subjecterror3 = document.getElementById("subjecterror3");
     let subjecterror4 = document.getElementById("subjecterror4");
      let subjecterror5 = document.getElementById("subjecterror5");


      if(!subjectpattern.test(document.getElementById("subject1").value)) {
        subjecterror1.innerText ="Invalid Subject Name .Only letters and spaces are allowed";
        subjecterror1.style.color ="red";
      } else {
        subjecterror1.innerText ="";
      }

      if(!subjectpattern.test(document.getElementById("subject2").value)) {
        subjecterror2.innerText ="Invalid Subject Name .Only letters and spaces are allowed";
        subjecterror2.style.color ="red";
      } else {
        subjecterror2.innerText ="";
      }

      if(!subjectpattern.test(document.getElementById("subject3").value)) {
        subjecterror3.innerText ="Invalid Subject Name .Only letters and spaces are allowed";
        subjecterror3.style.color ="red";
      } else {
        subjecterror3.innerText ="";
      }

      if(!subjectpattern.test(document.getElementById("subject4").value)) {
        subjecterror4.innerText ="Invalid Subject Name .Only letters and spaces are allowed";
        subjecterror4.style.color ="red";
      } else {
        subjecterror4.innerText ="";
      }

      if(!subjectpattern.test(document.getElementById("subject5").value)) {
        subjecterror5.innerText ="Invalid Subject Name .Only letters and spaces are allowed";
        subjecterror5.style.color ="red";
      } else {
        subjecterror5.innerText ="";
      }
}

    function checkResult() {
       
        let subject1 = document.getElementById("subject1").value;
        let marks1 = document.getElementById("marks1").value;

       
        let subject2 = document.getElementById("subject2").value;  
        let marks2 = document.getElementById("marks2").value;
        
         let subject3 = document.getElementById("subject3").value;
         let marks3 = document.getElementById("marks3").value;

          let subject4= document.getElementById("subject4").value;
          let marks4 = document.getElementById("marks4").value;


           let subject5 = document.getElementById("subject5").value;
           let marks5 = document.getElementById("marks5").value;
        
        let result = document.getElementById("result");

        let missingsfields=[];

        
        if( subject1 ==="") {
            missingsfields.push("Subject 1 Name is necessary ");
        }

        if(subject2 ==="") {
            missingsfields.push("Subhect 2 is  name is necessary ");
        }

        if(subject3 ==="") {
            missingsfields.push("Subhect 3 is  name is necessary ");
        }

        if(subject4 ==="") {
            missingsfields.push("Subhect 4 is  name is necessary ");
        }

        if(subject5 ==="") {
            missingsfields.push("Subhect 5 is  name is necessary ");
        }


        if(marks1 ==="") {
            missingsfields.push("Marks for Subject 1 is invalid");
        }

        if(marks2 ==="") {
            missingsfields.push("Marks for Subejct 2 is invalid")
        }

        if(marks3 ==="") {
            missingsfields.push("Marks for Subject 3 is invalid");
        }

        if(marks4 === "") {
            missingsfields.push("Makrs for Subejct 4 is invalid");
        }

        if(marks5 ==="")  {
            missingsfields.push("Makrs for subehct 5 is invalid");
        }

        
        if(missingsfields.length > 0) {
            result.innerHTML ="Please fill the following fields :<br> " + missingsfields.join(",  <br>");
            result.style.color = "red";
            return;
        }

        

   

       
    }
</script>
</body>

</html>
