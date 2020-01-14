const reduce = (arr, callBack, value = 0) => {
    let previosValue = value;
    for (let index = 0; index < arr.length; index++) {
        previosValue = callBack(previosValue, arr[index], index, arr);
    }
    return previosValue;
};
const arrReduce = [1, 2, 4, 7, 2, 4, 8, 7, 15];
console.log(reduce(arrReduce, (sum, value) => (sum + value), 50));