const T = [3, 4, 7, 7, 6, 6];
//const T= [80, 80, 1000000000, 80, 80, 80, 80, 80, 80, 123456789];

const brotherCandies = [];
const maryCandies = [];
const candyCount = {};

for (let i = 0; i < T.length; i++) {
    const candy = T[i];
    candyCount[candy] = (candyCount[candy] || 0) + 1;
}

for (let i = 0; i < T.length; i++) {
    const candy = T[i];
    
    if (!maryCandies.includes(candy)) {
        maryCandies.push(candy);
        candyCount[candy]--;
    }

    if (candyCount[candy] > 0) {
        brotherCandies.push(candy);
        candyCount[candy]--;
    }
}
console.log("|--------------------------------------------------|");
console.log("| The amount of candy Maria has is: ", maryCandies.length, "            |");
console.log("|--------------------------------------------------|");
console.log("| original array: ", T, "         |");
console.log("|--------------------------------------------------|");
console.log("| Sweets that Maria has left: ", maryCandies, "   |");
console.log("| Sweets that he gives to his brother: ", brotherCandies, "|");
console.log("|--------------------------------------------------|");
