let  gameStart=[true,true,true,true];

let gameStartCount=0;

for(let i=0; i<gameStart.length; i++) {
    if(gameStart[i]) {
        gameStartCount++;
    }
}

let playerPresent= gameStartCount >=4;

if(playerPresent) {
    console.log("Game starts");
} else {
    console.log("Game starts not possibile");
}