import Picture from "../models/Picture.js";
const initialData = () => {
  const database = {
    pictures: [
      {
        url: "https://cdn.britannica.com/80/94380-050-F182700B/Tel-Aviv-Yafo-Israel.jpg",
        alt: "Israel",
        credits: "Israel",
        price: 1_000,
        user_id: "123456",
      },
      {
        url: "https://cdn.wallpapersafari.com/59/61/SwOg5x.jpg",
        alt: "Europe",
        credits: "Europe",
        price: 2_000,
        user_id: "123456",
      },
      {
        url: "https://wallpaperset.com/w/full/9/c/7/111200.jpg",
        alt: "USA",
        credits: "USA",
        price: 3_000,
        user_id: "123456",
      },
    ],
    users: [
      {
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
      },
      {
        email: "test@gmail.co.il",
        password: "Aa1234!",
        address: {
          state: "usa",
          country: "new-york",
          city: "new-york",
          street: "brodway",
          houseNumber: 5,
          zip: 123456,
        },
        phone: "050-0000000",
        name: {
          first: "david",
          last: "yakin",
        },
      },
    ],
  };

  try {
    const pictures = database.pictures.map((picture, index, pictures) => {
      return new Picture(picture, pictures);
    });

    const users = null;
    return { pictures, users };
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export default initialData;
