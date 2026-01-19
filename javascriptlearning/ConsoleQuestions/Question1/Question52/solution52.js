let flags = [false, false, false, false];

let hasTrue = false;

for (let i = 0; i < flags.length; i++) {
    if (flags[i] === true) {
        hasTrue = true;
        break;
    }
}

if (hasTrue) {
    console.log("Action allowed");
} else {
    console.log("Action denied");
}
