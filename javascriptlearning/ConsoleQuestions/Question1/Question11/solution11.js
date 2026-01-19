let  doctors=["Dibash Magar","Dilip Khattri","Ravi Lamichnee", "Shyam Magar"];
let isAvailability=[true,true,true,true];

let doctorsCount=0;

// count  present doctors
for(let i=0; i<isAvailability.length; i++) {
    if(isAvailability[i]) {
        doctorsCount++;

    }
}

////decsion
 if(doctorsCount>=2) {
    console.log("hospital open");
 }  else {
    console.log("hospital closed");
 }

 //print the doctorName and there  status

 let statusDoctor=0;
 while(statusDoctor<doctors.length) {
    console.log(doctors[statusDoctor]+":is"+(isAvailability[statusDoctor]? "available":"unavailable"));
    statusDoctor++;
 }

 // check Avalilability of doctors

 let j=0;
 do {
    console.log("Availability checked for"+doctors[j]);
    j++;
 } while(j<doctors.length);

 //// switch condition

 switch(doctorsCount){
     case doctors.length: // if all true
        console.log("All doctors available");
        break;
    case 2:
    case 3:
        console.log("Minimum doctors available");
        break;
    default:
        console.log("Hospital closed");

 }
