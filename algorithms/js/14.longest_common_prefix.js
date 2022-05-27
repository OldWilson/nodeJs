var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }

    const s1 = Math.max(...strs);
    const s2 = Math.min(...strs);
    for (let i = 0; i < s1.length; ++i) {
        if (s1.charAt(i) !== s2.charAt(i)) {
            return s2.substring(0, i);
        }
    }
    return s1;

}

const strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));