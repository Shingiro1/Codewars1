// Write function heron which calculates the area of a triangle with sides a, b, and c.

// Heron's formula:

function heron(a, b, c){
    let s = (a + b + c) / 2;
    let answer = Math.sqrt(s*(s-a)*(s-b)*(a-c)); 
    //The Math.sqrt method computes the square root of the given arguments.
    return answer;
} 
console.log(heron(4,6,4))