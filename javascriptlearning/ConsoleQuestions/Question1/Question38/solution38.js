let shopHas=[true,true];
let shopStaffCount=0;

for(let i=0; i<shopHas.length; i++) {
    if(shopHas[i]) {
        shopStaffCount++
    }
}

let shopOpen= shopStaffCount>=2;

if(shopOpen) {
    console.log("Shop is open");
} else {
    console.log("Shop is closed");
}