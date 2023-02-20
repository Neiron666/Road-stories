const setCounter = (array, counter, controller = "") => {
  let newCounter;
  /* next אם לחצו על */
  if (controller === "next") {
    newCounter = counter < array.lenght - 1 ? counter + 1 : 0;
    return newCounter;
  }
  /* prev אם לחצו על */
  if (controller === "prev") {
    newCounter = counter > 0 ? counter - 1 : array.lenght - 1;
    return newCounter;
  }
  /* אם לא לחצו על כלום אז פונקציה מחזירה ספרה 0 */
  return 0;
};

export default setCounter;
