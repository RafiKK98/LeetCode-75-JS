/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeStringsAlternately = function(word1, word2) {
    let result = '';
    const [m, n] = [word1.length, word2.length];
    for (let i = 0, j = 0; i < m || j < n;) {
        if (i < m) {
            result += word1[i++];
        }
        if (j < n) {
            result += word2[j++];
        }
    }
    return result;
};

console.log(mergeStringsAlternately("abc", "pqr"));
console.log(mergeStringsAlternately("ab", "pqrs"));
console.log(mergeStringsAlternately("abcd", "pq"));