export default (dateStrings: [string]): number => {
  const currentDate = Date.now();
  let date = -1;

  if (dateStrings.length) {
    let futureDateExists = dateStrings.some(
      (d: string) => parseInt(d) > currentDate
    );
    if (futureDateExists) {
      for (let i = 0; i < dateStrings.length; i++) {
        const dateItem = parseInt(dateStrings[i]);
        if (dateItem > currentDate) {
          date = dateItem;
          break;
        }
      }
    } else {
      for (let i = dateStrings.length - 1; i >= 0; i--) {
        const dateItem = parseInt(dateStrings[i]);
        if (dateItem <= currentDate) {
          date = dateItem;
          break;
        }
      }
    }
  }

  return date;
};
