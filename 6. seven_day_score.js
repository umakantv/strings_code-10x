
// Find the number of times when total score of seven consecutive days is 4

let scores = "01011001101"


let count = 0;
let sum = 0;
let m = 7;

for (let i = 0; i < scores.length; i++) {
    sum += Number(scores[i]);
    // console.log(sum);

    if (i >= m) {  // so that we have some element to subtract
        sum -= Number(scores[i-m]);
    }

    if (i >= m - 1 && sum === 4) {  // we have reached the size of the bucket as m
        count++;
    }
}

console.log(count)