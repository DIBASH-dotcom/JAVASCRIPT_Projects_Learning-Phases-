let present = [true, false, true, true, false, true, true, true, false, true, true];

let count = 0;

for (let i = 0; i < present.length; i++) {
    if (present[i]) {
        count++;
    }
}

let busCanStart   = count >= 1;
let schoolCanOpen = count >= 5;
let gameCanStart  = count >= 4;
let eventCanStart = count >= 10;

console.log("Bus:", busCanStart);
console.log("School:", schoolCanOpen);
console.log("Game:", gameCanStart);
console.log("Event:", eventCanStart);
