let audience=[true,true,true,true,true];
let count =0;

for(let i=0; i<audience.length; i++) {
    if(audience[i]===true)
        count++;
}

let projectWorking = count>=5;

if (projectWorking) {
    console.log("Show Started");
}else {
    console.log("Not Started");
}