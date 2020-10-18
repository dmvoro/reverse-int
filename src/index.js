module.exports = function reverse (n) {
    var revString = n.toString();
    var splitString = revString.split(""); 
    var reverseArray = splitString.reverse();     
    var joinArray = reverseArray.join(""); 
    
    
    return parseInt(joinArray)
}
