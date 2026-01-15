let totalSeat=[false,true,true,true,true,true,true,false];
let totalSeatCount= totalSeat.length;
let bookedSeatCount=0;
let seatAvailableCount=0;

for(let i=0; i<totalSeat.length; i++) {
    if(totalSeat[i]) {
        bookedSeatCount++;
    } else {
        seatAvailableCount++;
    }
}

console.log("Number of  Seats:", totalSeatCount);
console.log("Number of Booked Seats:", bookedSeatCount);
console.log("Number of Available Seats:", seatAvailableCount);