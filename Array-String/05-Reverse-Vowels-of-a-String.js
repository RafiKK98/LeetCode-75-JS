/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
    const vowels = 'aeiouAEIOU';
    let stringArray = s.split('');
    let start = 0, end = s.length - 1;
    while (start < end) {
        if (vowels.includes(stringArray[start]) && vowels.includes(stringArray[end])) {
            let temp = stringArray[start];
            stringArray[start] = stringArray[end];
            stringArray[end] = temp;
            start++; 
            end--;
        }
        else if (vowels.includes(stringArray[start])) {
            end--;
        }
        else {
            start++;
        }
    }
    return stringArray.join('');
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));