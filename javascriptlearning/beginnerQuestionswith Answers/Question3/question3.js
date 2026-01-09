function checkBoxStatus() {
    let option = document.getElementsByClassName("option");
    let result = document.getElementById("result");

    let missingfields =[];

    let anychecked = false;

    for (let i=0; i<option.length; i++) {
        if(option[i].checked) {
            anychecked = true;
            break;
        }
    }
 if(!anychecked) {
    missingfields.push("at least one skill");
 }

 if(missingfields.length>0) {
    result.innerHTML="Please select " + missingfields.join(",");

 } else {
    result.innerHTML="skill selcted sucesssfully";
 }
}