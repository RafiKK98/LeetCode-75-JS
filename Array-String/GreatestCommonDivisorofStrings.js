/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function(str1, str2) {
    
    function gcd(x, y) {
        if (y == 0) {
            return x;
        } else {
            return gcd(y, x % y);
        }
    }

    if (str1 + str2 != str2 + str1) {
        return "";
    }
    let gcdLength = gcd(str1.length, str2.length);
    return str1.substring(0, gcdLength);
};

console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("LEET", "CODE"));