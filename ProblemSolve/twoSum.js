function twoSum(array, S){
	let hashTable = {};
	for(let i = 0; i <= array.length ; i++){
		let sumMinusElement = S - array[i];
		if(sumMinusElement !== undefined){
			return true;
		}
		hashTable[array[i]] = true;
	}

	return false
}

twoSum([3, 2, 3, 4], 2);
