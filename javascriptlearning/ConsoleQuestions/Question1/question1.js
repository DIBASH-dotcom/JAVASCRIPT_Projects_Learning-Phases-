let arr1 = [3, 4, 5, 6, 7];
let arr2 = [1, 5, 7, 8, 7];

let count = 0;

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            count++;
        }
    }
}

console.log(count);
