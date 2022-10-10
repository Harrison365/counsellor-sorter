const { counsellors } = require("./counsellors.js");

const sorter = (counsellors) => {
  let shuffledCounsellors = counsellors.sort(() => Math.random() - 0.5); //order of counsellors added to arrays is now random
  // let counsellorNumber = counsellors.length;
  let mondayArray = [];
  let tuesdayArray = [];
  let wednesdayArray = [];
  let thursdayArray = [];

  let weekArray = [mondayArray, tuesdayArray, wednesdayArray, thursdayArray];
  let shuffledWeekArray = weekArray.sort(() => Math.random() - 0.5); //the days which recieve extra counsellors is now random
  let adderCounter = 0;

  for (let i = 0; i < shuffledCounsellors.length; i++) {
    shuffledWeekArray[adderCounter].push(shuffledCounsellors[i]);

    adderCounter++;
    if (adderCounter == 4) {
      adderCounter = 0;
    }

    //Add conditional logic to prevent counsellors with the same schedule being matched
  }

  return {
    shuffledWeekArray,
  };
};

module.exports = { sorter };

console.log(sorter(counsellors));
