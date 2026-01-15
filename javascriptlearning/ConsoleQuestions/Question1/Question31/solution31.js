let classAttendance = [true, false, true, true, false];
let studentCount = 0;

for (let i = 0; i < classAttendance.length; i++) {
    if (classAttendance[i]) {
        studentCount++;
    }
}

console.log("Total Students:", studentCount);
