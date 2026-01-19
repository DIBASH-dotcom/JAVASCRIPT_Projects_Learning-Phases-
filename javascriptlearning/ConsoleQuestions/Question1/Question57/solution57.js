let staffName=["Dibash", "Babar","Steve Smith", "Apex","Ram"];
let attendenceOfStaff=[ true, true,false,false,true];

let presentCount=0;
// staff count
for(let i=0; i<attendenceOfStaff.length; i++) {
    if(attendenceOfStaff[i]) {
        presentCount++;
    }
}

if(presentCount >=3) {
    console.log("Library is Open");
} else {
    console.log("Library is Closed");
}


//prints name of staff

 let index=0;

while (index<staffName.length){
    console.log(staffName[index]+"is"+ (attendenceOfStaff[index]?"Present" :"Absent"));
    index ++;
} 
//attendencec checked of staff
let j=0;

do{
    console.log("Chekced attendence for" +staffName[j]);
    j++;
}  while ( j<staffName.length);

switch (presentCount) {
    case 5:
        console.log("All staff present");
        break;
  
    case 4:
        console.log("Enough staff available");
        break;
    default:
        console.log("Not enough staff");
}