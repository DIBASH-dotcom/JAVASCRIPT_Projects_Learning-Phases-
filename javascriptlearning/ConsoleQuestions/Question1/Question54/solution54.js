let hasFlags =[true,true,true];

let hasTrue = false;
for(let i=0; i<hasFlags.length; i++){
    //Compare
    if(hasFlags[i]){
        hasTrue = true;
         break;
    }
}
if(hasFlags) {
    console.log("Action allowed");

} else {
    console.log("Action not allowed");
}
