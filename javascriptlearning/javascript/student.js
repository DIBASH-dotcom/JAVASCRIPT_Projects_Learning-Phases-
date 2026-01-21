<!DOCTYPE html>
<html>
<head>
    <title>Student Attendance</title>
</head>
<body>

<div id="students">
    <div>
        Name: <input type="text" class="name">
        Present: <input type="checkbox" class="present">
    </div>

    <div>
        Name: <input type="text" class="name">
        Present: <input type="checkbox" class="present">
    </div>

    <div>
        Name: <input type="text" class="name">
        Present: <input type="checkbox" class="present">
    </div>
</div>

<button onclick="CheckAttendence()">Check Attendance</button>

<h3>Result:</h3>
<ul id="result"></ul>

<p id="summary"></p>

<script src="one.js"></script>
</body>
</html>
