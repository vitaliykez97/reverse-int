module.exports = function reverse(n) {
    var x = Math.abs(n).toString().split("").reverse().join("");
    console.log(n);
    console.log(typeof x);
    return Math.abs(n).toString().split("").reverse().join("");
};
