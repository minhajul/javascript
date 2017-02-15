
function matchingParens(string) {
    let counter = 0;
    for (let c of string) {
        if (c === '(') {
            counter += 1;
        }

        if (c === ')') {
            counter -= 1;
        }

    }
    return counter === 0;
}

console.log(matchingParens('5'));
