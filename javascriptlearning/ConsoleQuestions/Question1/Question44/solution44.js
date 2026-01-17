let machines = [true, false, true, true];
let workingCount = 0;
let i = 0;

while (i < machines.length) {
    if (machines[i] === true) {
        workingCount++;
    }

    if (workingCount === 2) {
        break;
    }
     i++;
}
console.log("Working machines:", workingCount);
