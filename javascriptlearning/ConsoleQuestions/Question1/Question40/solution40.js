let peopleAre=[ true,true,true,true,true,true,true,true,true,true
 ];

 let peopleCount=0;

 for(let i=0;i<peopleAre.length;i++){
    if(peopleAre[i]) {
        peopleCount++;
    }
 }
   let presentPeople = peopleCount>=10;

   if(presentPeople) {
    console.log("Event On");
   } else {
console.log("Event Off");
   }