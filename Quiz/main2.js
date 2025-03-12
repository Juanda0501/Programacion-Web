
const T = [3, 4, 7, 7, 6, 6];
//const T= [80, 80, 1000000000, 80, 80, 80, 80, 80, 80, 123456789];


function countCandies(arr, index = 0, count = {}) {
    if (index === arr.length) return count;
    count[arr[index]] = (count[arr[index]] || 0) + 1;
    return countCandies(arr, index + 1, count);
}

function giveCandies(candyCount, half, brotherCandies = []) {
    if (brotherCandies.length === half) return brotherCandies;
    
    for (let candy in candyCount) {
        if (candyCount[candy] > 1) {
            brotherCandies.push(Number(candy));
            candyCount[candy]--;
            return giveCandies(candyCount, half, brotherCandies);
        }
    }
    
    for (let candy in candyCount) {
        if (candyCount[candy] > 0) {
            brotherCandies.push(Number(candy));
            candyCount[candy]--;
            return giveCandies(candyCount, half, brotherCandies);
        }
    }
    
    return brotherCandies;
}


function assignRemainingCandies(candyCount, maryCandies = []) {
    const candies = Object.keys(candyCount).filter(c => candyCount[c] > 0).map(Number);
    return maryCandies.concat(candies);
}

const candyCount = countCandies(T);
const half = T.length / 2;
const brotherCandies = giveCandies(candyCount, half);
const maryCandies = assignRemainingCandies(candyCount);


console.log("|-----------------------------------------------------|");
console.log("| The amount of candy Maria has is: ", maryCandies.length, "               |");
console.log("|-----------------------------------------------------|");
console.log("| original array: ", T, "            |");
console.log("|-----------------------------------------------------|");
console.log("| Sweets that Maria has left: ", maryCandies, "         |");
console.log("| Sweets that he gives to his brother: ", brotherCandies, "|");
console.log("|-----------------------------------------------------|");
