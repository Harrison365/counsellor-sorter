const { counsellors } = require("./counsellors.js");

const sorter = (counsellors) => {
  let shuffledCounsellors = counsellors.sort(() => Math.random() - 0.5);

  let mondayArray = ["M"];
  let tuesdayArray = ["Tu"];
  let wednesdayArray = ["W"];
  let thursdayArray = ["Th"];

  let weekArray = [mondayArray, tuesdayArray, wednesdayArray, thursdayArray];
  let shuffledWeekArray = weekArray.sort(() => Math.random() - 0.5);

  console.log(shuffledWeekArray, shuffledCounsellors);
  for (let i = 0; i < shuffledCounsellors.length; i++) {}

  return {
    Monday: mondayArray,
    Tuesday: tuesdayArray,
    Wednesday: wednesdayArray,
    Tursday: thursdayArray,
  };
};

module.exports = { sorter };

console.log(sorter(counsellors));
