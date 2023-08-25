const User = function(infoCar){
    this.name = infoCar.moneName;
    this.age = infoCar.priceAge;
    this.followers = infoCar.monelFolofers;
}

function greetGuest(greeting) {
    // console.log(`${greeting}, ${this.username}.`);
    console.log(`User ${this.User.name} is ${this.User.age} years old and has ${this.User.followers} followers`);
  }
  
  const mango1 = {
    username: "Манго",
  };
  const poly1 = {
    username: "Полі",
    
  };
  const mango = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
    });
    mango.getInfo(); // User Mango is 2 years old and has 20 followers
    const poly = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
    });
    poly.getInfo(); // User Poly is 3 years old and has 17 followers
  greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
  greetGuest.call(poly1, "З прибуттям"); // З прибуттям, Полі.
  console.log(greetGuest.call(poly1, "З прибуттям"));
//   greetGuest.call(mango, " "); 
//   console.log(  greetGuest.call(mango));
//   `User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers`













































































