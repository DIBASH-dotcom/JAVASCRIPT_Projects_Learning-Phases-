<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Age Calculator</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f3f3f3;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .card {
            background: white;
            padding: 25px;
            width: 380px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        h1 {
            font-size: 22px;
            margin-bottom: 15px;
        }

        label {
            font-weight: bold;
            display: block;
            margin-top: 12px;
        }

        input, select {
            width: 100%;
            padding: 10px;
            margin-top: 6px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .bs-inputs {
            display: flex;
            gap: 10px;
            margin-top: 6px;
        }

        .bs-inputs input {
            width: 33%;
        }

        button {
            margin-top: 20px;
            width: 100%;
            padding: 12px;
            background: #0077ff;
            border: none;
            color: white;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background: #005fcc;
        }

        .error-msg {
            font-size: 14px;
            color: red;
        }

        .result {
            margin-top: 20px;
            padding: 12px;
            background: #e8f0ff;
            border-left: 4px solid #0077ff;
            border-radius: 5px;
            display: none;
        }
    </style>
</head>
<body>

<div class="card">

    <h1>Age Calculator</h1>

    <label>Name:</label>
    <input type="text" id="name" placeholder="Enter Your Name">
    <span id="nameError" class="error-msg"></span>

    <label>Calendar:</label>
    <select id="calender" onchange="toggleDateInputs()">
        <option value="" disabled selected>Select Calendar</option>
        <option value="AD">AD</option>
        <option value="BS">BS</option>
    </select>

    <div id="adcontainer" style="display:none;">
        <label>Date of Birth (AD):</label>
        <input type="date" id="date">
        <span id="dateerror" class="error-msg"></span>
    </div>

    <div id="bscontainer" style="display:none;">
        <label>Date of Birth (BS):</label>
        <div class="bs-inputs">
            <input type="number" id="yearBs" placeholder="YYYY" min="2000" max="5100">
            <input type="number" id="monthBs" placeholder="MM" min="1" max="12">
            <input type="number" id="dayBs" placeholder="DD" min="1" max="32">
        </div>
        <span id="dateerrorBs" class="error-msg"></span>
    </div>

    <button onclick="calculateAge()">Calculate Age</button>

    <div class="result" id="result"></div>

</div>


<script>
    function toggleDateInputs() {
        const cal = document.getElementById('calender').value;

        document.getElementById('adcontainer').style.display = (cal === 'AD') ? 'block' : 'none';
        document.getElementById('bscontainer').style.display = (cal === 'BS') ? 'block' : 'none';
    }

    function calculateAge() {
        const name = document.getElementById('name').value.trim();
        const cal = document.getElementById('calender').value;

        const resultDiv = document.getElementById('result');
        resultDiv.style.display = "none";
        resultDiv.innerHTML = "";

        document.getElementById('nameError').textContent = "";
        document.getElementById('dateerror').textContent = "";
        document.getElementById('dateerrorBs').textContent = "";

        if (!name) {
            document.getElementById('nameError').textContent = "Enter your name";
            return;
        }

        let birthDate;

        if (cal === "AD") {
            const adDate = document.getElementById("date").value;
            if (!adDate) {
                document.getElementById("dateerror").textContent = "Enter your AD date";
                return;
            }
            birthDate = new Date(adDate);
        }

        if (cal === "BS") {
            const y = document.getElementById("yearBs").value;
            const m = document.getElementById("monthBs").value;
            const d = document.getElementById("dayBs").value;

            if (!y || !m || !d) {
                document.getElementById("dateerrorBs").textContent = "Enter full BS date";
                return;
            }

            birthDate = new Date(`${y}-${m}-${d}`);
        }

        const now = new Date();
        let age = now.getFullYear() - birthDate.getFullYear();
        const month = now.getMonth() - birthDate.getMonth();

        if (month < 0 || (month === 0 && now.getDate() < birthDate.getDate())) {
            age--;
        }

        resultDiv.style.display = "block";
        resultDiv.innerHTML = `<strong>${name}</strong>, your age is <strong>${age}</strong> years.`;
    }
</script>

</body>
</html>
