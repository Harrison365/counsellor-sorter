const { sorter } = require("./sorter.js");
const { counsellors } = require("./counsellors.js");

describe("sorter", () => {
  test("returns an object", () => {
    expect(sorter(counsellors)).toEqual(expect.any(Object));
  });
});
