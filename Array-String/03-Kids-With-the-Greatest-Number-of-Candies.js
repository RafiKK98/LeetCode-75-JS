/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function(candies, extraCandies) {
    const result = Array(candies.length).fill(false);
    const greatest = Math.max(...candies);
    for (let i = 0; i < candies.length; i++) {
        if (candies.at(i) + extraCandies >= greatest) {
            result[i] = true;
        }
    }
    return result;
};

console.log(kidsWithCandies([2,3,5,1,3], 3));
console.log(kidsWithCandies([4,2,1,1,2], 1));
console.log(kidsWithCandies([12,1,12], 10));