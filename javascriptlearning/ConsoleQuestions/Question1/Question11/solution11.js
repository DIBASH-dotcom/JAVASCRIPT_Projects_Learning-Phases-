let students=[true,true, true,true, true,true,true,true,true,true];
let count =0;
let librarian =true;
let  electricity= true;

for(let i=0; i<students.length; i++) {
    if(students[i] ===true) {
        count ++;
    }
}
let libraryOpen = count >= 10 && librarian === true && electricity === true;

if(libraryOpen) {
    console.log("Libbary is Open ")
} 
else {
    console.log("someone is missing student,electrcity or libraran");
}

