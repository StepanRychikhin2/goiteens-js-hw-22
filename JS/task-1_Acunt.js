

const Account = function (infoUser) {
    this.login = infoUser.login;
    this.email = infoUser.email;
}


const getInfo = function (login, email) {


    let newUser = new Account({
        login: login,
        email: email,
    });

console.log(newUser);
return newUser;
};

// function
const mango = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
});
// console.log(mango);
// mango.getInfo('Mangozedog', 'mango@dog.woof'); // Login: Mangozedog, Email: mango@dog.woof
const poly = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
});
// poly.getInfo(); // Login: Poly, Email: poly@mail.com
// console.log(poly);







console.log(Account.prototype.getInfo);