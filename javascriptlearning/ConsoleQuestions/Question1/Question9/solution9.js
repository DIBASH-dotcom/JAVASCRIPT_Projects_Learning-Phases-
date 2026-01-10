let itemsInStock = [true, true, false, false];
let count = 0;

for (let i = 0; i < itemsInStock.length; i++) {
    if (itemsInStock[i] === true) {
        count++;
    }
}

let discountApplied = count >= 2;

if (discountApplied) {
    console.log("Discount Applied");
} else {
    console.log("Discount Not Applied");
}
