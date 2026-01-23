// student names
let students = ["Ram", "Sita", "Hari", "Gita"];

// attendance status (true = present, false = absent)
let isPresent = [true, false, true, true];

// count present students
let count = 0;

// 1️⃣ for loop: count present students
for (let i = 0; i < isPresent.length; i++) {
    if (isPresent[i] == true) {
        count++;
    }
}

// 2️⃣ decision
if (count >= 3) {
    console.log("Class Open");
} else {
    console.log("Class Closed");
}

// 3️⃣ while loop: print each student status
let index = 0;
while (index < students.length) {
    if (isPresent[index] == true) {
        console.log(students[index] + " is present");
    } else {
        console.log(students[index] + " is absent");
    }
    index++;
}

// 4️⃣ do-while loop: check message
let j = 0;
do {
    console.log("Checked attendance for " + students[j]);
    j++;
} while (j < students.length);
