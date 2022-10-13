const { sorter } = require("./sorter.js");
const { counsellors } = require("./counsellors.js");
//Doesn't mutate input
describe("sorter", () => {
  test("when passed an empty counsellors array returns an object with empty day arrays", () => {
    expect(sorter(counsellors)).toEqual(expect.any(Object));
    expect(sorter([])).toEqual({
      monday: [],
      thursday: [],
      tuesday: [],
      wednesday: [],
    });
  });
  test("when passed counsellors, divisible by 4, all day arrays are equal size", () => {
    let eightCounsellors = counsellors.slice(0, 8);

    expect(sorter(eightCounsellors).monday.length).toEqual(2);
    expect(sorter(eightCounsellors).tuesday.length).toEqual(2);
    expect(sorter(eightCounsellors).wednesday.length).toEqual(2);
    expect(sorter(eightCounsellors).thursday.length).toEqual(2);
  });
});
