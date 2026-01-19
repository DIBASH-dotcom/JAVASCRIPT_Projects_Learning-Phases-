let students =[ "Dibash" ,"Magar", "Sujan","Kumar","Shrestha"];

let attendence=[ true,true,false,true,true];

let presentCount =0;

for (let i=0; i<attendence.length; i++) {
    if(attendence[i]) {
        presentCount++;
    }
}

if(presentCount>=3) {
    console.log("Class can start");
} else {
    console.log("Class cannot start");
}

let index =0;
while(index <students.length) {
    console.log(students[index] + "is" + (attendence[index] ? "present" : "absent"));
    index ++;

}

let j=0;
do {
    console.log("Checked atendence for" + students[j]);
    j++;
} while (j <students.length);


switch (presentCount) {
    case 4: 
    console.log("All Sudents are prsent");
    break;

    case 3:
        console.log("Most students are prsent");
        break;

        default :
        console.log("Many studetns are absent");
}