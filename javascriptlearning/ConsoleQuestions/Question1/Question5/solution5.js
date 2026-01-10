let classStarted= false;

let studentPresent =[ false,true  ,false];

for (let i=0; i<studentPresent.length; i++) {
    if(studentPresent[i] === true) {
        classStarted =true;
        break;
    }

    
}
if (classStarted) {
    console.log("Class started");
} else {
    console.log("Class cancelled");
}