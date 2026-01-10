// checking a srcutiy guard is in duty or not 
let shopOpen= false;

let securityguard=[true,true,false];
//checking a secutity guard
for (let i=0; i<securityguard.length; i++) {
    if(securityguard[i] ===true) {
        shopOpen= true;
         break;
    }
}

if(shopOpen) {
    console.log("Shop Open");
} else {
    console.log("Shop Close")
}