// I'm new to coding and now I want to
//  get the sum of two arrays... Actually 
// the sum of all their elements. I'll
//  appreciate for your help.

// P.S. Each array includes only 
// integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    const array = [...arr1, ...arr2];
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

}
arrayPlusArray([5,5], [7,9,2])
