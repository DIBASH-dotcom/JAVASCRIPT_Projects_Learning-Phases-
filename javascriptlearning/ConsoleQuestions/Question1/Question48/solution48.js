let admitCard =true;
let feePaid = true;

let examValid = admitCard && feePaid;

if(examValid) {
    console.log("Exam is valid");
} else {
    console.log("Exam is not valid");
}