function showtext() {

    // textbox value take from here
    let name = document.getElementById("mytextbook").value;
 // show a input users  in a dashboard/web page
    let result= document.getElementById("result")

    // show in console
    console.log(name);
if(name === "") {
    result.innerHTML="PLease enter name";
    return;
}
    //Display in page
 if(result) {
     result.innerHTML=`you printed ${name}`;
 }



}
