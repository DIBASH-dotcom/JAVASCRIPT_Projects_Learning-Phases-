let drivers = [true, true, false, true];
let presentCount = 0;

for (let i = 0; i < drivers.length; i++) {
    if (drivers[i]) {
        presentCount++;
    }
}

if (presentCount === drivers.length) {
    console.log("Bus Started");
} else {
    console.log("Bus Not Started");
}
