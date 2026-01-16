let  hasStudent=[true ,true,true,true,true];
let studentCount=0;
for(let i=0;i<hasStudent.length;i++) {
    if(hasStudent[i]){
        studentCount++;
    }
}
if(studentCount>=5) {
    console.log("School Open");
} else {
    console.log("School Closed");
}