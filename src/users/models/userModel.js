class User {
  #id;
  #name;
  address;
  phone;
  #email;
  #password;
  #createdAt;
  #isAdmin;
  #isBusiness;

  constructor(user, users = []) {
    const { name, address, phone } = user;
    const { fist, last } = name;
    const { state, country, city, street, houseNumber } = address;

    this.state = state;
    this.country = country;
    this.city = city;
    this.street = street;
    this.houseNumber = houseNumber;

    this.#isAdmin = false;
    this.#isBusiness = false;
    this.#createdAt = new Date();
  }
}

const obj = {};
const user = new User(obj);
