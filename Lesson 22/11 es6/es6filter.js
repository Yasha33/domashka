const filter = (arr, callBack) => {
    const newArr = [];
    if (!callBack) return arr.slice();
    for (let index = 0; index < arr.length; index++) {
        if (callBack(arr[index], index, arr))
            newArr.push(arr[index]);
    }
    return newArr;
};
const arrFilter = ['dasha', 'petrovich', 'yasha', 'sergey', 'ivan'];
console.log(filter(arrFilter, (el) => el.length === 5));
