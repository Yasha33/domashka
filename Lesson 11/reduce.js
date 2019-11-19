function reduce(arr, callBack, value = 0) {

    var previosValue = value;

    for (let index = 0; index < arr.length; index++) {

        previosValue = callBack(previosValue, arr[index], index, arr);
    }
    return previosValue;
}

var arr = [1, 2, 4, 7, 2, 4, 8, 7];

console.log(reduce(arr, (sum, value) => (sum + value), 50));