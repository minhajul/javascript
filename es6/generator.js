
function* createLogger() {
    console.log("Start");
    yield
    console.log("End");
}

const logger = createLogger();
logger.next();
logger.next();

