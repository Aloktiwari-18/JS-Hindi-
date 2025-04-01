class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    changeUserName() {
        this.username = this.username.toUpperCase(); // Updating the username
        return this.username;
    }
}

const chai = new User("chai", "chai@gmail.com", "123");
console.log(chai.encryptPassword());  // Output: 123abc
console.log(chai.changeUserName());   // Output: CHAI
console.log(chai.username);           // Output: CHAI (now correctly updated)



User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}

User.prototype.changeUserName=function(){
    this.username = this.username.toUpperCase(); // Updating the username
    return this.username;
}


const tea=new User("tea","tea@gmail.com","123")

console.log(tea.encryptPassword());  
console.log(tea.changeUserName());