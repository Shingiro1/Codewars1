// You get an array of numbers, return the sum of all of the positives ones.
    function positiveSum(arr){
        let sum = 0;
        for(let i=0; i <= arr.length; i++){
            if(arr[i] > 0){
                sum += arr[i];
            }
            return sum;
        }
    }
    console.log(positiveSum([3,5,7,1]));