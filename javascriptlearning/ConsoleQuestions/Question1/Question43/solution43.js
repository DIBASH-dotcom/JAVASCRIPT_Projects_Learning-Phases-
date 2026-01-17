let students = [true, true, false, true];
let count = 0;

for (let i = 0; i <students.length; i++) {
    if (students[i] === true) {
        count++;
    }
}

if (count >= 3) {
    console.log("School Open");
} else {
    console.log("School Closed");
}
