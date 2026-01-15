let studentPresent=[true,true,true,false];
let studentPresentCount=0;
let teacherPresent= true;
 let result=document.getElementById("result");

for (let i=0; i<studentPresent.length; i++) {
    if(studentPresent[i])
 {
        studentPresentCount++;
    }
}
 let ExamConduct = studentPresentCount >= 3 && teacherPresent;

if(ExamConduct)
 {
    result.innerHTML="Exam can be conducted";
    result.style.color="green";
 } else {
    result.innerHTML="Exam cannot be conducted";
 }

