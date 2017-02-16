

function selectionSort(array) {
    let midIndex,
        temp,
        len = array.length;

    for (let i = 0; i < len; i++){
        midIndex = i;
        for (let j = i + 1; j < len; j++){
            if (array[j] < array[midIndex]){
                midIndex = j;
            }
        }
        temp = array[i];
        array[i] = array[midIndex];
        array[midIndex] = temp;
    }

    return array;
}


console.log(selectionSort([5, 1, 12, -5, 16, 2, 12, 14]));
