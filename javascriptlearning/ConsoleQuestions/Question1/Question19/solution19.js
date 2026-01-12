let switches =[true,false,false];
let light =false;

for(let i=0; i<switches.length; i++) {
    if(switches[i]===true) {
           light= true;
           break;
    }
}
if(light) {
    console.log("The light is ON");
} else {
    console.log("The light is OFF");
}