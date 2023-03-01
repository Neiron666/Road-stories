import { randomNumBetween } from "../../utils/algomethods.js";
import { makeEveryFirstLetterCapital } from "../../utils/algomethods.js";

class User {
  #id;
  #name;
  #address;
  #phone;
  #email;
  #password;
  #createdAt;
  #isAdmin = false;
  #isBusiness = false;

  constructor(user, users = []) {
    const { id, name, address, phone, password, email } = user;
    const { state, country, city, street, houseNumber, zip } = address;
    // this.#address=address; //אפשר לעשות קיצור לאדרס
    this.#address = { state, country, city, street, houseNumber, zip };
    const { first, last } = name;
    this.#name = name;
    this.#phone = phone;
    this.#id = this.generateId(users);
  }
  // ****************פונקציה מחזירה מספר דפולטיבי בין מיליון ל 10 מליון*******
  generateId(arreyOfUsers) {
    if (arreyOfUsers.length >= 8_999_999)
      throw new Error("max users in array!");
    const randomNumber = randomNumBetween(1_000_000, 9_999_999);
    const user = arreyOfUsers.findIndex((user) => user._id === randomNumber);
    if (user === -1) return randomNumber;
    this.generateId(arreyOfUsers);
  }
  setName(user_name) {
    const { first, last } = user_name;

    // for(let key in user_name){
    //   Object[key].charAt(0)=Object[key].charAt(0).toUpperCase();
    // }
    return user_name;
  }
}

const test = {
  address: {
    state: "usa",
    country: "new-yourk",
    city: "new-yourk",
    street: "broadwey",
    houseNumber: 5,
    zip: 123456,
  },
  email: "bigo@gmail.com",
  phone: "050-0000000",
  name: {
    first: "Valik",
    last: "Oliynyk",
  },
};
const user = new User(test);
console.log(user);

// const test2=makeEveryFirstLetterCapital("  sdfdsf sdfsdSSDFFfds fsdfsdf sdfsdf")
// console.log(test2);

//   constructor(user, users = []) {
//     const { name, address, phone } = user;
//     const { fist, last } = name;
//     const { state, country, city, street, houseNumber } = address;

//     this.state = state;
//     this.country = country;
//     this.city = city;
//     this.street = street;
//     this.houseNumber = houseNumber;

//     this.#isAdmin = false;
//     this.#isBusiness = false;
//     this.#createdAt = new Date();
//   }

// const obj = {};
// const user = new User(obj);

// const user = new User();
// user.id = "blblb";
// console.log(user);

// export default User;

export default User;
