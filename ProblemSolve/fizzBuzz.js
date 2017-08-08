
function fizzbuzz(n){
    let results = [];
	for(let i = 1; i <= n; i++){
		const isFizz = (i % 3 === 0);
		const isBuzz= (i % 5 === 0);
		results.push(isFizz && isBuzz ?  'FizzBuzz' : isFizz ? 'Fizz' : isBuzz ? 'Buzz' : i);
	}

	return results;
}

console.log(fizzbuzz(50));