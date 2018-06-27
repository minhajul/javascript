// Binary search implement
function binarySearch(array, value) {

    let left = 0, right = array.length - 1, mid;

    while (left <= right){
        mid = Math.floor((left + right) / 2);
        if (array[mid] === value){
            return mid;
        }

        if (array[mid] < value){
            left = mid + 1;
        }else{
           right = mid - 1;
        }
    }

    return -1;
}


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(array, 10));