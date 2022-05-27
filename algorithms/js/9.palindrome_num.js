var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    const xStr = x.toString();
    const len = xStr.length;
    for (let i = 0; i < Math.floor(len / 2); ++i) {
        if (xStr.charAt(i) !== xStr.charAt(len - 1 - i)) {
            return false;
        }
    }
    return true;
}

var isPalindrome2 = function(x) {
    if (x < 0) {
        return false;
    }
    const xStr = x.toString();
    const newStr = xStr.split('').reverse().join('');
    return xStr === newStr;
}

const x = 121;
console.log(isPalindrome2(x));
