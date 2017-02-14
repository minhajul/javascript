
function map(arr, fn) {
    let result = [];
    for (let i of arr) {
        let applied = fn(i);
        result.push(applied);
    }
    return result;
}

let square = (x) => x * x;
let addZeros = (x) => parseInt(x += '00');
map([1, 2, 3, 4], square);
map([1, 2, 3, 4], addZeros);
