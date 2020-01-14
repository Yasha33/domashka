const some = (arr, callBack) => {
    if (!callBack) return false;
    for (let el of arr) {
        if (callBack(el))
            return true;
    }
    return false;
};
const arrSome = ['dasha', 'petrovich', 'yasha', 'sergey', 'ivan'];
console.log(some(arrSome, element => element === 'dasha'));
