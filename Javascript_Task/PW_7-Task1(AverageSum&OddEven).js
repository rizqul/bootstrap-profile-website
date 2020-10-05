
function OddEven(n) {
    var even = [];
    var odd = [];

    for (i = 0; i < n; i++) {
        if (i % 2 == 0) {
            even.push(i);
        } else {
            odd.push(i);
        }
    }

    console.log(even);
    console.log(odd);
}

function Average(n) {
    var sum = 0
    var set = []
    console.log("Enter Set of Number")
    for (i = 0; i < n; i++) {
        set.push(parseInt(window.prompt("enter the " + i + " Number")))
    }

    for (let i = 0; i < set.length; i++) {
        sum += set[i]   
    }
    
    console.log(sum)
    console.log(sum/set.length);
}
var oddEvenRange = window.prompt("Enter Odd Even Range")
var arraySum = window.prompt("Enter Length of Array")

console.log(Average(arraySum))
console.log(OddEven(oddEvenRange))