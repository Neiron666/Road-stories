// *****************************
export const makeFirstLetterCapital = (text) => {
  const term = text.toLowerCase().trim();
  return term.charAt(0).toUpperCase() + term.slice(1);
};
// *****************************
export const makeEveryFirstLetterCapital = (text) => {
  const term = text.toLowerCase().trim();
  const splitText = term.split(" ");

  for (let i = 0; i < splitText.length; i++) {
    splitText[i] = splitText[i].charAt(0).toUpperCase() + splitText[i].slice(1);
  }

  return splitText.join(" ");
};

// *****************************

// const random = Math.random() * 10;
// const round = Math.round(random);
// console.log(random);
// console.log(round);

// *************** מספר בין מנימום למקסימום***************
// Math.random() = random number from 0-1
export const randomNumBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
