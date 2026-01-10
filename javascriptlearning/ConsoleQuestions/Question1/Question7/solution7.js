let busStart= true;

let systems= [true,true,true];

for( let i=0; i<systems.length; i++) {
    if(systems[i]=== false){
        busStart=false;
        break;
    }
}

if(busStart) {
    console.log("Bus Start")
} else {
    console.log("Bus Fail");
}