let hasSmokeSensor= [false,false,true,true,true];
let hasHeatSensor= [false,false,true,true,true];
let countSmoke=0;
let countHeat=0;


for(let i=0; i<hasSmokeSensor.length; i++){
    if(hasSmokeSensor[i]){
        countSmoke++;
    }
}


for(let i=0; i<hasHeatSensor.length; i++){
    if(hasHeatSensor[i]){
        countHeat++;
    }
}


let sensorsWorking = (countSmoke === hasSmokeSensor.length) && (countHeat === hasHeatSensor.length);

if(sensorsWorking){
   console.log("All sensors are working");
} else {
   console.log("Some sensors are not working");
}
