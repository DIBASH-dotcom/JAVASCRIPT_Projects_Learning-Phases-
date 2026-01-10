let chefsavaiable=[true,true];
let assisatantsAvailable=[true,true,true];

let chefcount=0;
let assistantcount=0;
let electrcity = true;
let watersupply = true;

for( let i=0; i<assisatantsAvailable.length; i++) {
    if(assisatantsAvailable[i]===true)
        assistantcount++;

    for( let j=0; j<chefsavaiable.length; j++) {
        if(chefsavaiable[j]===true)
            chefcount ++;
        
    }
}

chefcount = chefcount /assisatantsAvailable.length;

kicheenOpen=(chefcount>=2) &&(assistantcount >=3) && (watersupply=== true) && (electrcity=== true);

if(kicheenOpen) {
    console.log("Kitchen Open");
} else {
    console.log("Kitchen Closed")
}