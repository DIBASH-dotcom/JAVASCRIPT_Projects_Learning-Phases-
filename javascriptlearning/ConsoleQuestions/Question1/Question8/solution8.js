let subjects = [true, true, false, true, false];
let passCount = 0;

for (let i = 0; i < subjects.length; i++) {
    if (subjects[i] === true) {
        passCount++;
    }
}

let examPassed = passCount >= 3;

if (examPassed) {
    console.log("Exam Passed");
} else {
    console.log("Exam Failed");
}
