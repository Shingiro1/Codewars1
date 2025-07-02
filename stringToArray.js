// Write a function to split a string 
// and convert it into an array of words.

function stringToArray(string){
    return string.split(' ');
}

// alternatives:
// splitting to individual string:
//    return Array.from(string);
// splitting by spread operator:
//   return  [...string];
