const Structs = require("../bundle.js");
const expect = require("chai").expect;

describe("ArrayUtils", function() {
  let ArrayUtils = Structs.ArrayUtils;
  let expected, actual;
  beforeEach( function() {
    expected = [];
    actual = [];
  });
  afterEach( function() {
    expected,
    actual = null;
  });
  it("remove should remove from first index of array", function(){
    actual.push(1, 2, 3, 4, 5, 6);
    ArrayUtils.remove(actual, 0);
    expected = [2, 3, 4, 5, 6];
    expect(actual).to.have.ordered.members(expected);
  });
  it("remove should remove from last index of array", function(){
    actual.push(1, 2, 3, 4, 5, 6);
    ArrayUtils.remove(actual, 5);
    expected = [1, 2, 3, 4, 5];
    expect(actual).to.have.ordered.members(expected);
  });
  it("remove should remove from middle index of array", function(){
    actual.push(1, 2, 3, 4, 5, 6);
    ArrayUtils.remove(actual, 3);
    expected = [1, 2, 3, 5, 6];
    expect(actual).to.have.ordered.members(expected);
  });
  it("remove should do nothing with empty array", function(){
    ArrayUtils.remove(actual, 3);
    expected = [];
    expect(actual).to.have.ordered.members(expected);
  });
  it("remove should work properly with array of length 1", function(){
    actual.push("A");
    ArrayUtils.remove(actual, 0);
    expected = [];
    expect(actual).to.have.ordered.members(expected);
  });
  it("remove should not alter array when index equals array length", function(){
    actual.push("A");
    ArrayUtils.remove(actual, 1);
    expected = ["A"];
    expect(actual).to.have.ordered.members(expected);
  });
  it("remove should not alter array when index > array length", function(){
    actual.push("A");
    ArrayUtils.remove(actual, 2);
    expected = ["A"];
    expect(actual).to.have.ordered.members(expected);
  });
  it("remove should not remove anything when index < 0", function(){
    actual.push("A");
    ArrayUtils.remove(actual, -1);
    expected = ["A"];
    expect(actual).to.have.ordered.members(expected);
  });
  it("removeObj should work properly if object is in array", function(){
    actual.push("A");
    ArrayUtils.removeObj(actual, "A");
    expected = [];
    expect(actual).to.have.ordered.members(expected);
  });
  it("removeObj should not alter array if object is not in array", function(){
    actual.push("A", "B");
    ArrayUtils.removeObj(actual, "C");
    expected = ["A", "B"];
    expect(actual).to.have.ordered.members(expected);
  });
  it("rotate should not work for OBVIOUS non numbers", function(){
    actual.push("A", "B");
    expect(() => ArrayUtils.rotate(actual, "a")).to.throw(TypeError);
    expect(() => ArrayUtils.rotate(actual, {})).to.throw(TypeError);
    expect(() => ArrayUtils.rotate(actual, [1, 2])).to.throw(TypeError);
    expected = ["A", "B"];
    expect(actual).to.have.ordered.members(expected);
  });
   it("rotate should work for negative numbers", function(){
    actual.push("A", "B", "C", "D");
    expected = ["B", "C", "D", "A"];
    ArrayUtils.rotate(actual, -1);
    expect(actual).to.have.ordered.members(expected);
  });
  it("rotate should work for negative numbers", function(){
    actual.push("A", "B", "C", "D");
    expected = ["B", "C", "D", "A"];
    ArrayUtils.rotate(actual, -1);
    expect(actual).to.have.ordered.members(expected);
  });
  it("rotate should work for positive numbers", function(){
    actual.push("A", "B", "C", "D");
    expected = ["B", "C", "D", "A"];
    ArrayUtils.rotate(actual, 3);
    expect(actual).to.have.ordered.members(expected);
  });
  it("rotate should not do anything for empty array", function(){
    expected = [];
    ArrayUtils.rotate(actual, 20);
    expect(actual).to.have.ordered.members(expected);
  });
  it("rotate should be same array when length is 1", function(){
    actual.push("A");
    expected = ["A"];
    ArrayUtils.rotate(actual, 13);
    expect(actual).to.have.ordered.members(expected);
  });
  it("rotate should revert to normal array when rotations equal |length|", function(){
    actual.push("A", "B", "C");
    expected = ["A", "B", "C"];
    ArrayUtils.rotate(actual, 3);
    expect(actual).to.have.ordered.members(expected);
    ArrayUtils.rotate(actual, -3);
    expect(actual).to.have.ordered.members(expected);
  });
  it("rotate zero times should do nothing to array", function(){
    actual.push("A", "B", "C");
    expected = ["A", "B", "C"];
    ArrayUtils.rotate(actual);
    expect(actual).to.have.ordered.members(expected);
  });
  it("popMany is immutable method", function(){
    actual.push("A", "B", "C");
    expected = ["A", "B", "C"];
    ArrayUtils.popMany(actual, 2);
    expect(actual).to.have.ordered.members(expected);
  });
  it("popMany should pop 1 time", function(){
    actual.push("A", "B", "C");
    expected = ["A", "B"];
    expect(ArrayUtils.popMany(actual, 1)).to.have.ordered.members(expected);
  });
  it("popMany should pop all items when times to pop is length", function(){
    actual.push("A", "B", "C");
    expected = ["A", "B", "C"];
    expect(ArrayUtils.popMany(actual, 3)).to.have.ordered.members([]);
  });
  it("popMany should pop all items when times to pop is greater length", function(){
    actual.push("A", "B", "C");
    expected = ["A", "B", "C"];
    expect(ArrayUtils.popMany(actual, 4)).to.have.ordered.members([]);
  });
  it("popMany should not pop anything when times to pop is less than 0", function(){
    actual.push("A", "B", "C");
    expected = ["A", "B", "C"];
    expect(ArrayUtils.popMany(actual, -1)).to.have.ordered.members(expected);
  });
  it("popMany should not pop anything when times to pop is 0", function(){
    actual.push("A", "B", "C");
    expected = ["A", "B", "C"];
    expect(ArrayUtils.popMany(actual, 0)).to.have.ordered.members(expected);
  });
  it("popMany should return empty array when given empty array", function(){
    expected = [];
    expect(ArrayUtils.popMany(actual, 0)).to.have.ordered.members(expected);
  });
  it("popMany should work properly when array length 1 pop 1 case", function(){
    actual.push("A");
    expected = [];
    expect(ArrayUtils.popMany(actual, 1)).to.have.ordered.members(expected);
  });
  
});