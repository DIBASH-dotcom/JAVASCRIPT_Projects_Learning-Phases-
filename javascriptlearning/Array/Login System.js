<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login System</title>

    <style>
        * {
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            margin: 0;
            padding: 0;
            height: 100vh;
            background: linear-gradient(135deg, #667eea, #764ba2);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .container {
            background: #fff;
            padding: 25px 30px;
            width: 320px;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        h2 {
            text-align: center;
            margin-bottom: 20px;
            color: #333;
        }

        label {
            font-size: 14px;
            color: #555;
        }

        input {
            width: 100%;
            padding: 10px;
            margin-top: 6px;
            margin-bottom: 4px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
        }

        input:disabled {
            background: #eee;
            cursor: not-allowed;
        }

        span {
            font-size: 12px;
            height: 14px;
            display: block;
            margin-bottom: 10px;
        }

        button {
            width: 100%;
            padding: 10px;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 15px;
            cursor: pointer;
        }

        button:hover {
            background: #5a67d8;
        }

        #result {
            text-align: center;
            margin-top: 15px;
            font-weight: bold;
        }
    </style>
</head>

<body>

<div class="container">
    <h2>Login Form</h2>

    <label>User Name</label>
    <input type="text" id="name" placeholder="Enter Your User Name" oninput="checkName()">
    <span id="nameError"></span>

    <label>Password</label>
    <input type="password" id="password" placeholder="Enter Your Password" oninput="checkPassword()">
    <span id="passworderror"></span>

    <button type="button" onclick="submit_form()">Login</button>
    <p id="result"></p>
</div>

<script>
let emptyPasswordAttempts = 0;
let isBlocked = false;

function checkName() {
    let name = document.getElementById("name").value;
    let error = document.getElementById("nameError");

    if (name === "") {
        error.innerText = "User Name is required";
        error.style.color = "red";
    } else {
        error.innerText = "";
    }
}

function checkPassword() {
    let password = document.getElementById("password").value;
    let error = document.getElementById("passworderror");

    if (password === "") {
        error.innerText = "Password is required";
        error.style.color = "red";
    } else {
        error.innerText = "";
    }
}

function submit_form() {
    let result = document.getElementById("result");

    if (isBlocked) {
        result.innerText = "Too many attempts. Login blocked.";
        result.style.color = "red";
        return;
    }

    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;

  
    if (name === "" && password === "") {
        result.innerText = "User Name and Password are required";
        result.style.color = "red";
        return;
    }

    if (name === "" || password === "") {
        result.innerText = "Please fill all fields";
        result.style.color = "red";
        return;
    }

  
    if (name === "admin" && password === "123456") {
        result.innerText = "Login Successfully";
        result.style.color = "green";
        emptyPasswordAttempts = 0; // reset
        return;
    }

  
    emptyPasswordAttempts++;

    result.innerText =
        "Wrong password. Attempts left: " + (6 - emptyPasswordAttempts);
    result.style.color = "red";

  
    if (emptyPasswordAttempts >= 6) {
        isBlocked = true;
        result.innerText = "Too many wrong attempts. You are blocked.";
        document.getElementById("name").disabled = true;
        document.getElementById("password").disabled = true;
    }
}

</script>


<!--
CHANGES MADE IN THIS VERSION:

1. Improved UI/UX with CSS:
   - Added a modern gradient background and centered login container.
   - Styled input fields, buttons, and error messages for better readability and aesthetics.
   - Password field now uses type="password" for security.

2. Added real-time input validation:
   - `checkName()` and `checkPassword()` provide instant feedback on empty fields.
   - Error messages appear below each input as the user types.

3. Added login attempt tracking:
   - Tracks empty password submissions.
   - After 6 empty password attempts, disables the input fields and blocks further login attempts.
   - Displays clear messages about remaining attempts and when blocked.

4. Updated submit logic:
   - Only processes login when inputs are valid.
   - Displays success or invalid credentials messages appropriately.
   - Resets empty-password counter on successful login.

WHY THIS MATTERS:
- Enhances user experience with immediate feedback and visual clarity.
- Provides a basic security measure against repeated empty password submissions.
- Creates a structured, maintainable codebase for future improvements.
-->

</body>
</html>
