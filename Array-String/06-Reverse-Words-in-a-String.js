/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    const wordArray = s.trim().split(' ');
    let reverseString = '';
    for (let i = wordArray.length - 1; i > 0; i--) {
        if (wordArray[i] != '') {
            reverseString += wordArray[i] + " ";
        }
    }
    return reverseString + wordArray[0];
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));