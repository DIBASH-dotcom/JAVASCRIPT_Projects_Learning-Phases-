let teachers = [true, true, true, true];
let students = [true, true, true, true, true];

let teacherCount = 0;
let studentCount = 0;
let grounds = true;
let firstAid = true;

for (let i = 0; i < teachers.length; i++) {
    if (teachers[i]) teacherCount++;
}

for (let j = 0; j < students.length; j++) {
    if (students[j]) studentCount++;
}

let sportsEvent =
    teacherCount >= 3 &&
    studentCount >= 5 &&
    grounds &&
    firstAid;

if (sportsEvent) {
    console.log("Sports Event Started");
} else {
    console.log("Sports Event Canceled");
}
