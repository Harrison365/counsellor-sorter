const { counsellors } = require("./counsellors.js");

const sorter = (counsellors) => {
  console.log(counsellors.length);
  let mondayArray = [];
  let tuesdayArray = [];
  let wednesdayArray = [];
  let thursdayArray = [];

  for (let i = 0; i < counsellors.length; i++) {
    let randomNumber = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

    if (randomNumber === 1 && mondayArray.length < 4) {
      mondayArray.push(counsellors[i]);
    }
    if (randomNumber === 2 && tuesdayArray.length < 4) {
      tuesdayArray.push(counsellors[i]);
    }
    if (randomNumber === 3 && wednesdayArray.length < 4) {
      wednesdayArray.push(counsellors[i]);
    }
    if (randomNumber === 4 && thursdayArray.length < 4) {
      thursdayArray.push(counsellors[i]);
    }

    //NEED A WAY TO LOOP BACK UP TO PICK A NEW NUMBER IF ARRAY IS FULL
  }
  console.log(
    mondayArray.length +
      tuesdayArray.length +
      wednesdayArray.length +
      thursdayArray.length
  );
  return {
    Monday: mondayArray,
    Tuesday: tuesdayArray,
    Wednesday: wednesdayArray,
    Tursday: thursdayArray,
  };
};

module.exports = { sorter };

console.log(sorter(counsellors));
