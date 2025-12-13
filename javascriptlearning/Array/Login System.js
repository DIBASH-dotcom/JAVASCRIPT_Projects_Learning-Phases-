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
            <input type="text" id="name" placeholder="Enter Your User Name"><br>
             <span id="nameError"></span>

            <label> Password:</label>

            <input type="text" id="password" placeholder="Enter Your Password"><br>
 <span id="passworderror"></span>
            
<button onclick="submit_form()">Login</button>
<p id="result"></p>
        </form>
        
    </div>

    <script>

   function submit_form() {
        let name= document.getElementById("name").value;
        let password=document.getElementById("password").value;

        let result=document.getElementById("result");

        if(!name && !password){
            document.getElementById("result").innerHTML="Uswer Name and Password is requirded";
            result.style.color="red";
            return;
        }


        if(name==="") {
           
           document.getElementById("nameError").innerText="User Name is requireded";
             nameError.style.color="red";
            return;
        }

        if(password==="") {
            document.getElementById("passworderror").innerHTML="Password is requireded";
            passworderror.style.color="red";
            return;
        }
if(password.length <6) {
    document.getElementById("passworderror").innerHTML="Password must be at least 6 characters  or long";
    result.style.color="red";
    return;
}
        if(name ==="admin" && password==="123456") {
            document.getElementById("result").innerHTML="Login Sucessfully";
            result.style.color="green";
            return;
        }
        else {
            document.getElementById("result").innerHTML="Invalid User Name or Password";
            result.style.color="red";
            return;
        }



   }
    </script>

</body>
</html>
