let workingLight=[true,true,true,true,false];
let workingLightCount=0;
let defuseLightCount=0;

for(let i=0; i<workingLight.length; i++) {
    if(workingLight[i]===true) {
        workingLightCount++;
    } else {
        defuseLightCount++;
    }
}
console.log("Number of Working Lights:", workingLightCount);
console.log("Number of Defused Lights:", defuseLightCount);