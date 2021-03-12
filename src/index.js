module.exports = function reverse (n) {
    let a = Math.abs(n);
    let revStr = a.toString().split('').reverse().join('');
    return Number(revStr);
}
