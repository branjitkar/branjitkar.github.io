describe("sum", function () {
  it("Sum of [2,4,6] us 12", function () {
    assert.equal(sum([2, 4, 6]), 12);
  });
});

describe("multiply", function () {
  it("Multiple of [2,4,6] us 48", function () {
    assert.equal(multiply([2, 4, 6]), 48);
  });
});

describe("reverse", () => {
  it("Reverse of 'random' is 'modnar'", () => {
    assert.equal(reverse("random"), "modnar");
  });
});

describe("filter long words", () => {
  it("the words longer than length 3 in array ['ball', 'football', 'bal', 'lab'] is ['ball', 'football']", () => {
    assert.equal(
      JSON.stringify(filterLongWords(["ball", "football", "bal", "lab"], 3)),
      JSON.stringify(["ball", "football"])
    );
  });
});
