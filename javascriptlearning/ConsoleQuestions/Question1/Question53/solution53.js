let hasFlags =[true,false,false,false,false,false,false,false,false,false];

let falgsBe= false;

for(let i=0; i<hasFlags.length; i++){
    //Compare
    if(hasFlags[i]){
        //assign
        falgsBe= true;
        break;
    }
}
if(falgsBe) {
    console.log("Action allowed");

} else {
    console.log("Action not allowed");
}
