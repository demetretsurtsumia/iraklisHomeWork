
function isBalanced(s, index = 0, balance = 0) {
    if (index === s.length) {
        return balance === 0;
    }
    if (s[index] === '(') {
        return isBalanced(s, index + 1, balance + 1);
    }
    else if (s[index] === ')') {
        if (balance === 0) {
            return false;
        }
        return isBalanced(s, index + 1, balance - 1);
    }
    return isBalanced(s, index + 1, balance);
}


console.log(isBalanced("(()())"))
