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
    this.#email = email;
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
    const arrayOfValues = Object.values(user_name).join(" ");
    // for(let key in user_name){
    //   Object[key].charAt(0)=Object[key].charAt(0).toUpperCase();
    // }
    return makeEveryFirstLetterCapital(arrayOfValues);
  }
  checkPhone(phoneNumber) {
    const regex = /^[\d]{9}\d$/g;
    if (!phoneNumber) {
      throw new Error("Enter a phone number!");
    }
    if (!regex.test(phoneNumber)) {
      throw new Error("Enter correct phone number of 10 digits only!");
    }
    return phoneNumber.slice(0, 3) + "-" + phoneNumber.slice(3);
  }

  // ************email checking***************

  checkEmail(email, arrayOfemails) {
    const regex = /^[\w]+@[\w]+((\.co\.il)|(\.com))$/g;
    if (!regex.test(email)) {
      throw new Error("Please, enter a valid email!");
    }
    const user_email = arrayOfemails.findIndex(
      (user) => user.email === this.#email
    );
    if (user_email === -1) return email;
    throw new Error("Please, choose another email!");
  }
  get name() {
    return this.#name;
  }
  get phone() {
    return this.#phone;
  }
  get email() {
    return this.#email;
  }
}

// ******try and catch**********

try {
  const email = "email";
  const arrayOfemails = [
    {
      email: "bigo@gmail.com",
    },
    {
      email: "bio@gmail.com",
    },
  ];
  // console.log(arrayOfemails[0].email);
  const user = new User({
    address: {
      state: "usa",
      country: "new-yourk",
      city: "new-yourk",
      street: "broadwey",
      houseNumber: 5,
      zip: 123456,
    },
    email: "bigo@gmail.com",
    phone: "0500000000",
    name: {
      first: "valik",
      last: "oliynyk",
    },
  });
  console.log(user);
  console.log(user.checkEmail(user.email, arrayOfemails));
  // console.log(user.email);
  // console.log(user.name);
  // console.log(user.setName(user.name));
  // console.log(user.checkPhone(user.phone));
} catch (error) {
  console.log(error.message);
}

// *********test**************

// const test = {
//   address: {
//     state: "usa",
//     country: "new-yourk",
//     city: "new-yourk",
//     street: "broadwey",
//     houseNumber: 5,
//     zip: 123456,
//   },
//   email: "bigo@gmail.com",
//   phone: "0500000000",
//   name: {
//     first: "valik",
//     last: "oliynyk",
//   },
// };

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
