// Given two strings comprised of + and -, return a new string 
// which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they 
// become neutral, and are shown as the number 0.
// Worked Example
// ("+-+", "+--") ➞ "+-0"
// # Compare the first characters of each string, then the next in turn.
// # "+" against a "+" returns another "+".
// # "-" against a "-" returns another "-".
// # "+" against a "-" returns "0".
// # Return the string of characters.
// Examples
// ("--++--", "++--++") ➞ "000000"

// ("-+-+-+", "-+-+-+") ➞ "-+-+-+"

// ("-++-", "-+-+") ➞ "-+00"

function neutralise(s1, s2){
    let answer = '';
    for(let i=0; Math.min(s1.length, s2.length);i++){ //this loop increments from 0 by adding 1 to every iteration
        //and the Math.min method  checks our arguments and returns smallest argnts in terms of nbrs.
        answer += s1[i] === s2[i] ? s1[i] : '0'; // use ternary operator to check for true or falsy of the statement.
    }
    return answer;
}
console.log(neutralise('++-+', '--++-+-'))