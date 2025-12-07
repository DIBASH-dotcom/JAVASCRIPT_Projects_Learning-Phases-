<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Student Report Generator</title>
</head>
<body>
<h1>Student Report Generator</h1>

<label>Student Name:</label>
<input type="text" id="name" placeholder="Enter Name"><br><br>

<label>Course Name:</label>
<input type="text" id="course" placeholder="Enter Course"><br><br>

<label>Attendance Percentage (%):</label>
<input type="number" id="attendance" placeholder="Enter Attendance"><br><br>

<label>Enter Marks (0-100):</label>
<input type="number" id="marks" placeholder="Enter Marks"><br><br>

<button onclick="generateReport()">Generate Report</button>

<h2>Report:</h2>
<p id="result"></p>

<script>
function generateReport() {
    let name = document.getElementById("name").value.trim();
    let course = document.getElementById("course").value.trim();
    let attendance = document.getElementById("attendance").value.trim();
    let marks = document.getElementById("marks").value.trim();
    let result = document.getElementById("result");

    let missing = [];
    if(name === "") missing.push("Name");
    if(course === "") missing.push("Course");
    if(attendance === "") missing.push("Attendance");
    if(marks === "") missing.push("Marks");

    if(missing.length > 0){
        result.innerHTML = "Please fill the following fields: " + missing.join(", ");
        result.style.color = "red";
        return;
    }

    let att = parseFloat(attendance);
    let mark = parseFloat(marks);

    if(isNaN(att) || att < 0 || att > 100) {
        result.innerHTML = "Attendance must be a number between 0 and 100.";
        result.style.color = "red";
        return;
    }

    if(isNaN(mark) || mark < 0 || mark > 100) {
        result.innerHTML = "Marks must be a number between 0 and 100.";
        result.style.color = "red";
        return;
    }

    let attendanceResult = (att >= 75) ? "Satisfactory" : "Unsatisfactory";

    let grade = "";
    if(mark >= 80) grade = "A+";
    else if(mark >= 70) grade = "A";
    else if(mark >= 60) grade = "B+";
    else if(mark >= 50) grade = "B";
    else if(mark >= 40) grade = "C+";
    else if(mark >= 35) grade = "C";
    else grade = "F";

    let finalresult = (grade === "F" || attendanceResult === "Unsatisfactory") ? "Fail" : "Pass";

    result.innerHTML = `
        Name: ${name}<br>
        Course: ${course}<br>
        Attendance: ${att}% (${attendanceResult})<br>
        Marks: ${mark}<br>
        Grade: ${grade}<br>
        Final Result: ${finalresult}
    `;

    result.style.color = (finalresult === "Fail") ? "red" : "green";
}
</script>
</body>
</html>
