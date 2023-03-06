import "./routes/links.js";
import setCounter from "./pictures/helpers/setCounter.js";
import renderSlider from "./pictures/components/renderSlider.js";
import { SLIDER_NEXT_BTN, SLIDER_PREV_BTN } from "./services/domService.js";
import onChangeSliderPic from "./pictures/helpers/onChangeSLiderPic.js";
import Picture from "./models/Picture.js";
import "./users/models/User.js";
import initialData from "./initial-data/initialData.js";

window.pictures = initialData().pictures;

// ********* יצירת מערך תמונות  **********

const pictures = [
  {
    url: "https://cdn.britannica.com/80/94380-050-F182700B/Tel-Aviv-Yafo-Israel.jpg",
    alt: "Israel",
    credits: "Israel",
  },
  {
    url: "https://cdn.wallpapersafari.com/59/61/SwOg5x.jpg",
    alt: "Europe",
    credits: "Europe",
  },
  {
    url: "https://wallpaperset.com/w/full/9/c/7/111200.jpg",
    alt: "USA",
    credits: "USA",
  },
];

// // ********* הדלקת פונקציה **********
renderSlider(pictures, 0);
