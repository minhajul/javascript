// Write a function called "transformEmployeeData" that transforms some employee data from one format to another.
//
// The argument will look something like this:
// [
//     [
//         ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//     ],
//     [
//         ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//     ]
// ]
//
// Given that input, the return value should look like this:
// [
//     {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// ]
//
// Note that the input may have a different number of rows or different keys than the given sample.
//
// For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.

function transformEmployeeData(array) {
	return array.map(function(a) {
    	var obj = {};
    	a.map(function(b) {
      	   obj[b[0]] = b[1];
    	});
      return obj;
  	})
}
