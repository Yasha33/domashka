function filter(arr, callBack) {

    var newArr = [];
    if (!callBack) return arr.slice();

    for (var index = 0; index < arr.length; index++) {

        if (callBack(arr[index], index, arr))
            newArr.push(arr[index]);
    }
    return newArr;
}

var arr = ['dasha', 'petrovich', 'yasha', 'sergey', 'ivan'];

console.log(filter(arr, function (element) {

    return element.length === 5;
}));