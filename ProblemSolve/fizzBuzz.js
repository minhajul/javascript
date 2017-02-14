function fizzbuzz(n){
	let results = [];
	for(let i = 1; i <= n; i++){
		let add = '';

		if(i % 3 === 0){
			add += 'Fizz';
		}

		if(i % 5 === 0){
			add += 'Buzz';
		}

		if(add === ''){
			results.push(i);
		}else{
			results.push(add);
		}
	}
	return results;
}
