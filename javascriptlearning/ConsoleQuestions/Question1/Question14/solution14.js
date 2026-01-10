let teachers=[true,true,true,true];
let students=[true,true,true,true,true];

teacherCount=0;
StudentsCount=0;
grounds= true;
fisrtaid=true;

for(let i=0; i<teachers.length; i++) {
    if(teachers[i]===true){
        teacherCount++;
    }
    for(let j=0; j<students.length; j++) {
        if(students[j]===true) {
            StudentsCount++;
        }
    }
}
let sportsevent= (teacherCount>=3) && (StudentsCount>=5) && grounds===true &&fisrtaid===true;

if(sportsevent) {
    console.log("Sports Event Started");
} else {
    console.log("Sports Event Canceled");
}