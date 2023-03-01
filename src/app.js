import "./links.js";
import setCounter from "./pictures/helpers/setCounter.js";
import renderSlider from "./pictures/components/renderSlider.js";
import { SLIDER_NEXT_BTN, SLIDER_PREV_BTN } from "./services/domService.js";
import onChangeSliderPic from "./pictures/helpers/onChangeSLiderPic.js";
import Picture from "./models/Picture.js";
import "./users/models/User.js";

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

let counter = setCounter(pictures);

// ********* הדלקת פונקציה **********
renderSlider(pictures);

// ********* האזנה לאירועים **********
SLIDER_NEXT_BTN.addEventListener(
  "click",
  () => (counter = onChangeSliderPic(pictures, counter, "next"))
);
SLIDER_PREV_BTN.addEventListener(
  "click",
  () => (counter = onChangeSliderPic(pictures, counter, "prev"))
);
