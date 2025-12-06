<!DOCTYPE html>
<html>
<head>
    <title>Attendance Analyzer</title>
</head>
<body>

<h1>Student Attendance Analyzer</h1>

<label>Student Name:</label>
<input type="text" id="name"><br><br>

<label>Enter 30 Days Attendance (P/A):</label>
<textarea id="attendance" rows="4" cols="50"></textarea><br><br>

<button id="analyze">Analyze</button>

<h2>Result</h2>
<p id="output"></p>

<script>
document.getElementById("analyze").addEventListener("click", () => {

    let name = document.getElementById("name").value.trim();
    let attendance = document.getElementById("attendance").value.trim();

    // Validation: name + attendance empty check
    if (!name || !attendance) {
        document.getElementById("output").innerHTML = "Please enter all values.";
        return;
    }

    // Convert to array
    let arr = attendance.split(",");

    // Must be exactly 30 values
    if (arr.length !== 30) {
        document.getElementById("output").innerHTML = "Please enter 30 days attendance.";
        return;
    }

    // Check each value: must be P or A
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].trim().toUpperCase();

        if (arr[i] !== "P" && arr[i] !== "A") {
            document.getElementById("output").innerHTML = "Invalid value found! Use only P or A.";
            return;
        }
    }

    let present = arr.filter(x => x === "P").length;
    let absent = arr.filter(x => x === "A").length;
    let percentage = (present / 30) * 100;

    let result = (percentage < 75) ? "FAIL (Short Attendance)" : "PASS";

    document.getElementById("output").innerHTML = `
        Name: ${name}<br>
        Present: ${present}<br>
        Absent: ${absent}<br>
        Attendance %: ${percentage.toFixed(2)}%<br>
        Result: ${result}
    `;
});
</script>

</body>
</html>
