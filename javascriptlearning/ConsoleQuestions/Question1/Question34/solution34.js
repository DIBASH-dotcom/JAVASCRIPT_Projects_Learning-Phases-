let  onlineUsers =[true,true,true,false];
let onlineUsersCount =0;

for(let i=0; i<onlineUsers.length; i++) {
    if(onlineUsers[i]) {
        onlineUsersCount++;
    }
}
console.log("Number of Online Users:", onlineUsersCount);