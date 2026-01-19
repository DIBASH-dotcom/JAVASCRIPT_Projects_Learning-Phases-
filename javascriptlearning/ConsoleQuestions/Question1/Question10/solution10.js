let viewers = ["Dibash Magar", "Niraj Thapa", "Nabin Karki", "Dilip Khattri", "Rachhna Karki"];
let isValidated = [false, false, true, true, true];

let count = 0;

// count
for (let i = 0; i < isValidated.length; i++) {
    if (isValidated[i]) count++;
}

// count present viewes
if (count >= 4) {
    console.log("Movie starts");
} else {
    console.log("Insufficient viewers");
}
// print the viwers status present or absent
let index = 0;
while (index < viewers.length) {
    console.log(viewers[index] + " is " + (isValidated[index] ? "Allowed" : "Denied"));
    index++;
}

// check confirmation message
let j = 0;
do {
    console.log("Ticket checked for " + viewers[j]);
    j++;
} while (j < viewers.length);
//switch condition
switch (count) {
    case viewers.length:
        console.log("House Full");
        break;
    case 4:
        console.log("Minimum viewers met");
        break;
    default:
        console.log("Entry not allowed");
}

