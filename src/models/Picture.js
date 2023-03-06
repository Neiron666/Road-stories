import { generateUniqId } from "../utils/algomethods.js";
// Story שם
// אצלי זה סיפור מסויים לקניה
class Picture {
  // הופחים לפרטי  # כדי שעף אחד לא יוכל לשנות
  #id;
  url;
  alt;
  credits;
  #price;
  #createdAt;
  likes = [];
  category;
  //   מי יצר את התמונה
  #user_id;
  //   אפשר גם לרשום
  //   constructor({ url, alt, credits, category, price, _id })
  constructor(picture, pictues = []) {
    //
    const { url, alt, credits, category, price, user_id } = picture;
    if (!url || !alt || !credits || !price || !user_id) {
      throw new Error("IN ERROR");
    }
    this.#id = generateUniqId(pictues, 1_000_000, 9_999_999);
    this.url = url;
    this.alt = alt;
    this.credits = credits;
    this.#price = price;
    this.category = category || "";
    this.#user_id = user_id;
    this.#createdAt = new Date();
  }

  //   edit(){}
  //_id נותנים שם חדש
  // מתודה כדי לגשת ל מפתח get
  get _id() {
    return this.#id;
  }
  get createdAt() {
    return this.#createdAt;
  }
  get price() {
    return this.#price;
  }
  //   ניתן להעביר רק פרמטר אחד, אם רוצים יותר אז נעביר למיכל כלשהו
  //   set price({ newPrice, user }) {
  //     if (user._id !== this.#userid) throw new Error("Only user that made the card can change the price");
  //     this.#price = newPrice;
  // }
  get user_id() {
    return this.#user_id;
  }
}

// try {
//   const pic = new Picture({
//     url: "ff",
//     alt: "dd",
//     credits: "dd",
//     price: 1000,
//     user_id: "123fghgh",
//     category: "123fghgh",
//   });
//   console.log(pic);
// } catch (error) {
//   error.status = 400;
//   console.log(error.message);
//   if (error.status >= 400) console.log("error bla bla");
// }
export default Picture;

// יוצרים מופע חדש מהקלאס ומעבירים לו את האובייקט עם מפתחות ו ערכים

// const user = { _id: "dfgfdgg1231431", isBusiness: true, isAdmin: false };
// pic.price = { newPrice: 1000, user };
