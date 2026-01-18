let hardwareWorking =true;
let softwareWorking =true;

let systemBoot = hardwareWorking && softwareWorking;

if(systemBoot) {
    console.log("System is up and running!");

}    else {
    console.log("System failed to boot.");
}
