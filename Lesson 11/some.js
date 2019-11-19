function some(arr, callBack) {
    if (!callBack) return false;
    for (var index = 0; index < arr.length; index++) {
        if (callBack(arr[index])) {
            return true;
        }
    }
    return false;
}

var arr = ['dasha', 'petrovich', 'yasha', 'sergey', 'ivan'];

console.log(some(arr, element => element === 'dasha'));

