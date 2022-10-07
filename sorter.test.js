const { sorter } = require("./sorter.js");
const { counsellors } = require("./counsellors.js");

describe("sorter", () => {
  test.skip("returns input", () => {
    expect(sorter(counsellors)).toBe(counsellors);
  });
  test("returns an object", () => {
    expect(sorter(counsellors)).toEqual(expect.any(Object));
  });
  test("returns an object containing weekday arrays", () => {
    expect(sorter(counsellors)).toEqual({
      Monday: expect.any(Array),
      Tuesday: expect.any(Array),
      Wednesday: expect.any(Array),
      Tursday: expect.any(Array),
    });
  });
  test("returns 4 equal sized arrays", () => {
    expect(sorter(counsellors)).toEqual({
      Monday: [
        {
          name: "Emily",
          p1: "swimming",
          p2: "singing",
          cabin: "B1",
        },
        {
          name: "Ben",
          p1: "tennis",
          p2: "pottery",
          cabin: "B1",
        },
        {
          name: "Dan",
          p1: "running",
          p2: "singing",
          cabin: "B2",
        },
        {
          name: "Becca",
          p1: "bracelet-making",
          p2: "martial-arts",
          cabin: "B2",
        },
      ],
      Tuesday: [
        {
          name: "Nial",
          p1: "whaling",
          p2: "martial-arts",
          cabin: "B3",
        },
        {
          name: "Sarah",
          p1: "kanooing",
          p2: "free",
          cabin: "B3",
        },
        {
          name: "James",
          p1: "whaling",
          p2: "free",
          cabin: "B4",
        },
        {
          name: "Craig",
          p1: "swimming",
          p2: "camping",
          cabin: "B4",
        },
      ],
      Wednesday: [
        {
          name: "Alana",
          p1: "kanooing",
          p2: "rugby",
          cabin: "B5",
        },
        {
          name: "Luke",
          p1: "free",
          p2: "camping",
          cabin: "B5",
        },
        {
          name: "Josh",
          p1: "free",
          p2: "zumba",
          cabin: "B6",
        },
        {
          name: "Mack",
          p1: "bracelet-making",
          p2: "rugby",
          cabin: "B6",
        },
      ],
      Tursday: [
        {
          name: "Jeff",
          p1: "running",
          p2: "pottery",
          cabin: "B7",
        },
        {
          name: "Kim",
          p1: "tennis",
          p2: "zumba",
          cabin: "B7",
        },
        {
          name: "Connor",
          p1: "free",
          p2: "free",
          cabin: "B8",
        },
        {
          name: "Jack",
          p1: "free",
          p2: "free",
          cabin: "B8",
        },
      ],
    });
  });
});
