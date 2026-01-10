let doctors =[true,true,true];
let nurses =[true,true,true];
let generator = true;

let doctorCount = 0;
let nurseCount = 0;


for(let i=0; i<doctors.length; i++){
    if(doctors[i]===true) doctorCount++;


    for(let j=0; j<nurses.length; j++){
        if(nurses[j]===true) nurseCount++;
    }
}


nurseCount = nurseCount / doctors.length;

let emergencyActive = (doctorCount >= 2) && (nurseCount >= 3) && (generator === true);

if(emergencyActive){
    console.log("Emergency Service Active");
} else {
    console.log("Emergency Service Inactive");
}
