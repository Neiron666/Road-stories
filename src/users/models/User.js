import { generateUniqId } from "../../utils/algomethods.js";
import { makeEveryFirstLetterCapital } from "../../utils/algomethods.js";
import { PASSWORD_REGEX } from "../../utils/regex.js";

class User {
  #id;
  #name;
  #address;
  #phone;
  #email;
  #password;
  #createdAt;
  #isAdmin;
  #isBusiness;

  constructor(user, users = []) {
    const { name, address, phone, password, email, isAdmin, isBusiness } = user;
    // this.#address=address; //אפשר לעשות קיצור לאדרס
    this.#address = this.checkAddress(address);
    this.#name = this.setName(name);
    this.#phone = this.checkPhone(phone);
    this.#id = generateUniqId(users, 1_000_000, 9_999_999);
    this.#email = this.checkEmail(email, users);
    this.#password = password;
    this.#createdAt = new Date();
    this.#password = this.checkPassword(password);
    this.#isAdmin = isAdmin || false;
    this.#isBusiness = isBusiness || false;
  }
  // ****************פונקציה מחזירה מספר דפולטיבי בין מיליון ל 10 מליון*******
  // generateId(arreyOfUsers) {
  //   if (arreyOfUsers.length >= 8_999_999)
  //     throw new Error("max users in array!");
  //   const randomNumber = randomNumBetween(1_000_000, 9_999_999);
  //   const user = arreyOfUsers.findIndex((user) => user._id === randomNumber);
  //   if (user === -1) return randomNumber;
  //   this.generateId(arreyOfUsers);
  // }

  // ***************הופכים אות ראשונה לגדולה**********
  setName(user_name) {
    const arrayOfValues = Object.values(user_name).join(" ");
    return makeEveryFirstLetterCapital(arrayOfValues);
  }
  // *****************אפשר גם ככה***********

  //    setName({ first, last }) {
  //   if(typeof first!==String||last!==String || first.langth<2 || last.lenght<2) throw new Error("Please enter a valid name")
  //     return {
  //       first: makeEveryFirstLetterCapital(first),
  //       last: makeEveryFirstLetterCapital(last),
  //     };
  //   }
  // }

  //******בדיקה של מספר טלפון******* */
  checkPhone(phone) {
    const regex = /^0[0-9]{1,2}(-?|\s?)[0-9]{3}(-?|\s?)[0-9]{4}/g;
    const isExist = phone.match(regex);
    if (!isExist) throw new Error("Please enter a valid phone number!");
    return phone;
  }

  // ************email checking***************

  checkEmail(email, users) {
    email.trim();
    const regex = /^[\w]+@[\w]+((\.co\.il)|(\.com))$/g;
    // const isAxist = regex.test(email);
    if (!regex.test(email)) {
      throw new Error("Please, enter a valid email!");
    }
    const user = users.findIndex((user) => user.email === email);
    if (user !== -1) throw new Error("Please, choose another email!");
    return email;
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
  get address() {
    return this.#address;
  }
  get password() {
    return this.#password;
  }
  get password() {
    return this.#password;
  }

  get _id() {
    return this.#id;
  }
  get createAt() {
    return this.#createdAt;
  }
  get isAdmin() {
    return this.#isAdmin;
  }

  // ************ check password************
  checkPassword(password) {
    const regex = PASSWORD_REGEX;
    const isExist = regex.test(password);
    if (!isExist)
      throw new Error(
        "The password must contain at least one uppercase letter in English. One lowercase letter in English. Four numbers and one of the following special characters !@#$%^&*-"
      );
    return password;
  }
  changeBizStatus(user) {
    if (user._id !== this.#id && !user.isAdmin)
      throw new Error("User must be registered user or Admin");
    this.#isBusiness = !this.#isBusiness;
  }
  checkAddress(address) {
    const { state, country, city, street, houseNumber, zip } = address;
    if (
      country.length < 2 ||
      city.length < 2 ||
      street.length < 2 ||
      typeof houseNumber !== "number" ||
      houseNumber <= 0 ||
      typeof zip !== "number" ||
      zip <= 0
    )
      throw new Error("Please enter a valid address!");

    return { state: state || "", country, city, street, houseNumber, zip };
  }
  // update(user, users) {
  //   if (typeof user !== "object") throw new Error("Please enter a valid user");
  //   if (user._id !== this.#id)
  //     throw new Error("Only register user can edit his info");
  //   const { id, name, address, phone, email, isBusiness } = user;
  //   const { state, country, city, street, houseNumber, zip } = address;
  //   this.#name = this.setName(name);
  //   this.#address = { state, country, city, street, houseNumber, zip };
  //   this.#phone = this.checkPhone(phone);
  //   this.#email =
  //     email === this.#email ? this.#email : this.checkEmail(email, users);
  //   this.#isBusiness = isBusiness ? isBusiness : this.#isBusiness;
  //   return this;
  // }
  changePassword() {}

  // static - מעביר את המטודה למחלקה
  static findOneAndUpdate(user, users) {
    if (typeof user !== "object") throw new Error("Please enter a valid user!");
    if (Array.isArray(users) !== true || !users.length)
      throw new Error("Please enter array of users");

    const userInArray = users.find((item) => item._id === user._id);
    if (!userInArray) throw new Error("this user in not in the database!");

    const { address, phone, name, email, isBusiness } = user;
    userInArray.#name = userInArray.setName(name);
    userInArray.#address = userInArray.checkAddress(address);
    userInArray.#phone = userInArray.checkPhone(phone);
    userInArray.#email =
      email === userInArray.#email
        ? userInArray.#email
        : userInArray.checkUniqEmail(email, users);
    userInArray.#isBusiness = isBusiness ? isBusiness : userInArray.#isBusiness;

    return users;
  }
}

// ******try and catch**********

// try {
//   const arrayOfemails = [
//     {
//       email: "bigo@gmail.com",
//     },
//     {
//       email: "bio@gmail.com",
//     },
//   ];
//   const test = {
//     password: "Aa1234!",
//     address: {
//       state: "usa",
//       country: "new-yourk",
//       city: "new-yourk",
//       street: "broadwey",
//       houseNumber: 5,
//       zip: 123456,
//     },
//     email: "bigo@gmail.com",
//     phone: "0500000000",
//     name: {
//       first: "valik",
//       last: "oliynyk",
//     },
//   };
// const user = new User(test);

// user.changeBizStatus(user);
// user.changeBizStatus({ _id: user, isAdmin: true });
// console.log(user);
// console.log(user.checkEmail(user.email, arrayOfemails));
// console.log(user.email);
// console.log(user.name);
// console.log(user.setName(user.name));
// console.log(user.checkPhone(user.phone));
// } catch (error) {
//   console.log(error.message);
// }

// ******try and catch for update method**********
const test = {
  password: "Aa1234!",
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
};
try {
  const user = new User(test);
  const array = [user];
  user.changeBizStatus(user);

  // user.update(
  //   {
  //     _id: user._id,
  //     password: "Aa1234!",
  //     name: {
  //       first: "shula",
  //       last: "zaken",
  //     },
  //     address: {
  //       state: "",
  //       country: "israel",
  //       city: "tel-aviv",
  //       street: "shoham",
  //       houseNumber: 5,
  //       zip: 123456,
  //     },
  //     email: "willi@gmail.com",
  //     phone: "0500000000",
  //   },
  //   arrayOfUsers
  // );
  console.log(user);
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

export default User;
