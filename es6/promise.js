
function fethUser(username) {
    const url = `https://api.github.com/users/${username}`;
    fetch(url)
        .then(response => response.json())
        .then(user => {
            console.log(user.name);
        })
}

console.log(fethUser("minhajCSE"));