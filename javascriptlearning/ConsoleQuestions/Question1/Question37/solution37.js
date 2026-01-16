let hasDriver = [true, true, false, false];
let presentDriverCount = 0;

for (let i = 0; i < hasDriver.length; i++) {
    if (hasDriver[i]) {
        presentDriverCount++;
    }
}

let busStart = presentDriverCount >= 1;

if (busStart) {
    console.log("Bus starts");
} else {
    console.log("Bus cannot start");
}
