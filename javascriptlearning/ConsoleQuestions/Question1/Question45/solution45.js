let guards = [false, true, false];
let gateOpen = false;

for (let i = 0; i < guards.length; i++) {
    if (guards[i] === true) {
        gateOpen = true;
        break;
    }
}

if (gateOpen) {
    console.log("Gate Open");
} else {
    console.log("Gate Closed");
}
