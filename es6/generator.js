
// function* createLogger() {
//     console.log("Start");
//     yield 1;
//     console.log("Middle");
//     yield 2;
//     console.log("End");
//     yield 3;
// }

// const logger = createLogger();
// logger.next();
// logger.next();

function* random() {
    while (true){
        yield Math.floor(Math.random() * 10) + 1;
    }
}


let rand = random();
console.log(rand.next());
console.log(rand.next());
