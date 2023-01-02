module.exports = function reverse(n) {
    console.log(n);
    console.log(Math.abs(n).toString().split("").reverse().join(""));
    return Math.abs(n).toString().split("").reverse().join("");
};
