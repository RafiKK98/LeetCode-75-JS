/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    const auxZeroArray = [];
    let i = 0;
    while (i < nums.length) {
        if (nums[i] == 0) {
            let zero = nums.splice(i, 1);
            auxZeroArray.push(...zero);
        } else i++;
    }
    nums.push(...auxZeroArray);
    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([0]));
