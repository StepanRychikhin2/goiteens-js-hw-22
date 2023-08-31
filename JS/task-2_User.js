// class User  {
//   constructor({ name, age, followers }) {
//     this.nameUser = name;
//     this.ageUser = age;
//     this.followersUser = followers;
//   }

//   getInfo(nameUser, ageUser, followersUser) {
//     console.log(`User ${this.nameUser} is ${this.ageUser} years old and has ${this.followersUser} followers`);
//   }
// };

const User = function ({ name, age, followers }) {
  this.nameUser = name;
  this.ageUser = age;
  this.followersUser = followers;
};
User.prototype.getInfo = function (nameUser, ageUser, followersUser) {
  console.log(
    `User ${nameUser} is ${ageUser} years old and has ${followersUser} followers`
  );
};

const mango = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});
mango.getInfo(); // User Mango is 2 years old and has 20 followers
const poly = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});
poly.getInfo(); // User Poly is 3 years old and has 17 followers
