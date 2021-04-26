/**
 * 使用 双端队列 解决 回文字
 * 
 * 规则:
 * 
 *  回文是正反都能读通的单词、词组、数或一系列字符的序列。
 * 
 * 例如: 
 * 
 *  madam或 racecar。
 * 
 */

const Deque = require('./deque');

function palindromeChecker(str = '') {
    if (typeof str !== 'string' || str === '') {
        return false;
    }

    const deque = new Deque();

    const lowerStr = str.toLocaleLowerCase();

    let isEqual = true;
    let firstChar, lastChar;

    for (let i = 0; i < lowerStr.length; i++) {
        deque.addBack(lowerStr.charAt(i));
    }

    while (deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();
        if (firstChar !== lastChar) {
            isEqual = false;
        }
    }
    return isEqual;
}

console.log(palindromeChecker());
console.log(palindromeChecker({}));
console.log(palindromeChecker(null));

console.log(palindromeChecker('ASDSA'));

console.log(palindromeChecker('ASDFG'));

console.log(palindromeChecker('我是我'));




