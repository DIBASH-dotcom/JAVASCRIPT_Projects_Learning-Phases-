<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login System </title>
</head>
<body>
    <div class="conatainner">
        <h2> Login Form</h2>
        <form action="">

            <label> UserName:</label>
            <input type="text" id="name" placeholder="Enter Your User Name" oninput="checkName()"><br>
             <span id="nameError"></span>

            <label> Password:</label>

            <input type="text" id="password" placeholder="Enter Your Password" oninput="checkPassword()"><br>
 <span id="passworderror"></span>
            
<button onclick="submit_form()">Login</button>
<p id="result"></p>
        </form>
        
    </div>

    <script>


function checkName() {
    let name= document.getElementById("name").value;
    let error= document.getElementById("nameError");

    if(name==="") {
        error.innerText="User Name is requireded";
        error.style.color="red";

    } else {
        error.innerText="";
    }
}


function checkPassword() {
    let password=document.getElementById("password").value;
    let errorpassword= document.getElementById("passworderror");

    if(password ==="") {
        errorpassword.innerHTML ="password id requireded";
        errorpassword.style.color="red";
    } 
    else {
        errorpassword.innerText="";
    }
} 

   function submit_form() {


    
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let result = document.getElementById("result");

    if (name === "" || password === "") {
        result.innerText = "please fill all the fields";
        result.style.color = "red";
        return;
    }

    if (name === "admin" && password === "123456") {
        result.innerText = "Login Successfully";
        result.style.color = "green";
    } else {
        result.innerText = "Invalid Username or Password";
        result.style.color = "red";
    }

    
}


    </script>


<!--
CHANGES MADE IN THIS VERSION:

1. Added real-time validation using `oninput`:
   - Username field now shows an error immediately when left empty.
   - Password field now shows an error immediately when left empty.
   - Users get feedback while typing instead of after clicking Login.

2. Separated validation logic:
   - Created `checkName()` for username validation.
   - Created `checkPassword()` for password validation.
   - This removes duplicate checks inside the submit function.

3. Improved submit flow:
   - Form submission now only checks final validity.
   - Displays a clear message when fields are missing.
   - Keeps login logic simple and readable.

4. Better user feedback:
   - Error messages appear below each input.
   - Result message clearly shows success or failure.

-->

</body>
</html>
