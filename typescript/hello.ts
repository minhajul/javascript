
class Person{
    fullName: string;
    constructor(public name: string, public email: string){
        this.fullName = name + " " + email;
    }
}

interface User{
    name: string;
    email: string;
}

function userInfo(user: User){
    return user.name + " " + user.email;
}

const person = new Person('Minhajul', 'kmsohelinfo@gmail.com');

console.log(userInfo(person));
