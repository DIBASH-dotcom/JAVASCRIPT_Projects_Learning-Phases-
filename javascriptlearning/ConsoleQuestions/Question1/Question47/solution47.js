let teacherPresent=[true,false,false];
let studentPresent =[true,true,true,true,false,true];

let teacherPresentCount =0;
let studentPresentCount =0;

for(let i=0; i<teacherPresent.length; i++) {
    if(teacherPresent[i]) {
        teacherPresentCount++;
    }
}

for(let j=0; j<studentPresent.length; j++) {
    if(studentPresent[j]) {
        studentPresentCount++;

    }
}

let classStarted= teacherPresentCount>=1 && studentPresentCount>=5;

if(classStarted) {
    console.log("Class Started");
} else {
     console.log("Class Not Started");
}