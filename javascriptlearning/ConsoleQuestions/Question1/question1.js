let orderCompleted = true; 
let productAvailable = true;  
let productDeliver = false;

if (orderCompleted && productAvailable) {  
    productDeliver = true;
}

console.log("Delivery Possible:", productDeliver);
