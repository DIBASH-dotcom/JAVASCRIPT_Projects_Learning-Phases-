let userConnected =true;
let internetConnected = true;

let appRun = userConnected && internetConnected;

if(appRun) {
    console.log("App is running");
} else {
    console.log("App is not running");
}