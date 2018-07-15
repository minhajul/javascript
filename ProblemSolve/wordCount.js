const paragraph = "This is a paragraph. That is all that is that.";

function wordCount(paragraph) {
    return paragraph
        .replace(/[^a-zA-Z ]/g, "")
        .toLowerCase()
        .split(" ")
        .reduce((count, word) => {
            count[word] = (count[word] || 0) + 1;
            return count;
        }, {});
}

console.log(wordCount(paragraph));
