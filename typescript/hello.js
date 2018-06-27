var Person = /** @class */ (function () {
    function Person(name, email) {
        this.name = name;
        this.email = email;
        this.fullName = name + " " + email;
    }
    return Person;
}());
function userInfo(user) {
    return user.name + " " + user.email;
}
var person = new Person('Minhajul', 'kmsohelinfo@gmail.com');
console.log(userInfo(person));
