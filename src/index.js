module.exports = function reverse (n) {
    if (n < 0){
        var nStr = (n * (-1)).toString()
    } else { var nStr = n.toString() }
    var result = ''    
    for (let i = nStr.length; i>0; i--){
        result = `${result}${nStr[i-1]}`
    }
    return result 
}
