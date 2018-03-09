const ArrayUtils = require("../collections.js").ArrayUtils;
const expect = require("chai").expect;

describe("ArrayUtils", function() {
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

  it("removeElement should remove item from array", function(){
    actual.push("A");
    ArrayUtils.removeElement(actual, "A");
    expected = [];
    expect(actual).to.have.ordered.members(expected);
  });

  it("removeElement should not alter array if object is not in array", function(){
    actual.push("A", "B");
    ArrayUtils.removeElement(actual, "C");
    expected = ["A", "B"];
    expect(actual).to.have.ordered.members(expected);
  });

  it("rotate should throw error for OBVIOUS non numbers", function(){
    actual.push("A", "B");
    expect(() => ArrayUtils.rotate(actual, "a")).to.throw(TypeError);
    expect(() => ArrayUtils.rotate(actual, null)).to.throw(TypeError);
    expect(() => ArrayUtils.rotate(actual, "9")).to.throw(TypeError);
    expect(() => ArrayUtils.rotate(actual, {})).to.throw(TypeError);
    expect(() => ArrayUtils.rotate(actual, [1, 2])).to.throw(TypeError);
    expected = ["A", "B"];
    expect(actual).to.have.ordered.members(expected);
  });

  it("rotate should rotate left for negative numbers", function(){
    actual.push("A", "B", "C", "D");
    expected = ["B", "C", "D", "A"];
    ArrayUtils.rotate(actual, -1);
    expect(actual).to.have.ordered.members(expected);
  });

  it("rotate should rotate right for positive numbers", function(){
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

  it("rotate should result in same array when length is 1", function(){
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

  it("popMany does not alter original array", function(){
    actual.push("A", "B", "C");
    expected = ["A", "B", "C"];
    ArrayUtils.popMany(actual, 2);
    expect(actual).to.have.ordered.members(expected);
  });

  it("popMany once should only pop one element from array", function(){
    actual.push("A", "B", "C");
    expected = ["A", "B"];
    expect(ArrayUtils.popMany(actual, 1)).to.have.ordered.members(expected);
  });

  it("popMany should return empty array when times to pop is length", function(){
    actual.push("A", "B", "C");
    expected = ["A", "B", "C"];
    expect(ArrayUtils.popMany(actual, 3)).to.have.ordered.members([]);
  });

  it("popMany should return empty array when times to pop is greater than array length", function(){
    actual.push("A", "B", "C");
    expected = ["A", "B", "C"];
    expect(ArrayUtils.popMany(actual, 4)).to.have.ordered.members([]);
  });

  it("popMany should return original array when times to pop is less than 0", function(){
    actual.push("A", "B", "C");
    expected = ["A", "B", "C"];
    expect(ArrayUtils.popMany(actual, -1)).to.have.ordered.members(expected);
  });

  it("popMany should return original array when times to pop is 0", function(){
    actual.push("A", "B", "C");
    expected = ["A", "B", "C"];
    expect(ArrayUtils.popMany(actual, 0)).to.have.ordered.members(expected);
  });

  it("popMany should return empty array when given empty array", function(){
    expected = [];
    expect(ArrayUtils.popMany(actual, 5)).to.have.ordered.members(expected);
  });

  it("pushMany should push many things onto empty array", function(){
    expected = [1, 2, 3, 4, 5];
    expect(ArrayUtils.pushMany(actual, 1, 2, 3, 4, 5)
    ).to.have.ordered.members(expected);
  });

  it("pushMany should push many things onto non-empty array", function(){
    actual.push(-1, 0);
    expected = [-1, 0, 1, 2, 3, 4, 5];
    expect(ArrayUtils.pushMany(actual, 1, 2, 3, 4, 5)
    ).to.have.ordered.members(expected);
    
  });

  it("pushMany does not alter original array", function(){
    actual.push("a", "b", "c");
    expected = ["a", "b", "c", 1, 2] ;
    expect(ArrayUtils.pushMany(actual, 1, 2)).to.have.ordered.members(expected);
    expect(actual).to.have.ordered.members(["a", "b", "c"]);
  });

  it("getRand returns random number in array", function(){
    actual.push("a", "b", "c");
    for (let i = 0; i < 50; i += 1) {
      let rand = ArrayUtils.getRand(actual);
      expect(actual.indexOf(rand)).to.not.equal(-1);
    }
  });

  it("removeRand removes random index in array", function(){
    actual.push("a", "b", "c");
    expected = ["a", "b", "c"];
    while(actual.length > 0){
      let removed = ArrayUtils.removeRand(actual);
      expect(expected.indexOf(removed[0])).to.not.be.equal(-1);
    }
  });

  it("shuffle shufles array indicies", function(){
    actual.push("a", "b", "c", "d", "e", 1, 4);
    for (let i = 0; i < 20; i += 1) {
      ArrayUtils.shuffle(actual);
    }
    expect(actual).to.have.members(["a", "b", "c", 4, 1, "e", "d"]);
  });
  
  it("shuffle does not shuffle empty array", function(){
    for (let i = 0; i < 20; i += 1) {
      ArrayUtils.shuffle(actual);
    }
    expect(actual).to.have.members([]);
  });
  
  it("flatten does nothing to flattened array", function(){
    actual.push("a", "b");
    ArrayUtils.flatten(actual);
    expected = ["a", "b"];
    expect(ArrayUtils.flatten(actual)).to.have.ordered.members(expected);
  });

  it("flatten one level deep elements", function(){
    actual.push(["a"], ["b"]);
    ArrayUtils.flatten(actual);
    expected = ["a", "b"];
    expect(ArrayUtils.flatten(actual)).to.have.ordered.members(expected);
  });

  it("flatten four level deep elements", function(){
    actual.push([[[["a"]]]], [[[[["b"]]]]]);
    ArrayUtils.flatten(actual);
    expected = ["a", "b"];
    expect(ArrayUtils.flatten(actual)).to.have.ordered.members(expected);
  });

  it("flatten some elmeents array, some not", function(){
    actual.push([1, 2, 3], "e", "f", [7, 8]);
    ArrayUtils.flatten(actual);
    expected = [1, 2, 3, "e", "f", 7, 8];
    expect(ArrayUtils.flatten(actual)).to.have.ordered.members(expected);
  });
  it("flatten some elmeents array, some not multiple levels (arrays of arrays)(1)", function(){
    actual.push([1, [2, 2.5, 2.6, [2.7, [2.8, 2.9, [2.91]]]], 3]
    , ["e"], "f", [[7, 8]]);
    ArrayUtils.flatten(actual);
    expected = [1, 2, 2.5, 2.6, 2.7, 2.8, 2.9, 2.91, 3, "e", "f", 7, 8];
    expect(ArrayUtils.flatten(actual)).to.have.ordered.members(expected);
  });

  it("flatten some elmeents array, some not multiple levels (arrays of arrays)(2)", function(){
    actual.push([1,[2,[3,[[[[[[[[[[[4,[[[[[[[5,[[[["help"]]]]]]]]]]]]]
    ]]]]]]]]]]],6]);
    ArrayUtils.flatten(actual);
    expected = [1, 2, 3, 4, 5, "help", 6];
    expect(ArrayUtils.flatten(actual)).to.have.ordered.members(expected);
  });

  it("flatten flattens with objects and arrays (1)", function(){
    let obj = {};
    let a = [];
    actual.push([1,[obj,[3,[[[[[[[[[[[4,[[[[[[[a,[[[["help"]]]]]]]]]]]]]
    ]]]]]]]]]]],obj, a]);
    ArrayUtils.flatten(actual);
    expected = [1, obj,3, 4, "help", obj];
    expect(ArrayUtils.flatten(actual)).to.have.ordered.members(expected);
  });

   it("flatten flattens with objects and arrays (2)", function(){
    let obj = {};
    let a = ["InArray"];
    actual.push([1,[obj,[3,[[[[[[[[[[[4,[[[[[[[a,[[[["help"]]]]]]]]]]]]]
    ]]]]]]]]]]],obj, a]);
    ArrayUtils.flatten(actual);
    expected = [1, obj,3, 4, "InArray", "help", obj, "InArray"];
    expect(ArrayUtils.flatten(actual)).to.have.ordered.members(expected);
  });

  it("flatten should not flatten empty array", function(){
    ArrayUtils.flatten(actual);
    expected = [];
    expect(ArrayUtils.flatten(actual)).to.have.ordered.members(expected);
  });

  it("flatten empty arrays and objects case", function(){
    let y = {};
    let z = {};
    actual.push([], [], [], [], y, z);
    ArrayUtils.flatten(actual);
    expected = [y, z];
    expect(ArrayUtils.flatten(actual)).to.have.ordered.members(expected);
  });

  it("chunk should return an empty array for array of length 0", function(){
    expected = [];
    expect(ArrayUtils.chunk(actual, 1)).to.have.ordered.members(expected);
  });

  it("chunk should return the input array when chunk size is array length", function(){
    actual.push(1, 2, 3, 4);
    actual = ArrayUtils.chunk(actual, 4);
    expected = [[1, 2, 3, 4]];
    for (let i = 0; i<actual.length; i += 1) {
      expect(actual[i]).to.have.ordered.members(expected[i]);
    }
  });

   it("chunk should return the input array when chunk size is greater than array length", function(){
    actual.push(1, 2, 3, 4);
    actual = ArrayUtils.chunk(actual, 5);
    expected = [[1, 2, 3, 4]];
    for (let i = 0; i < actual.length; i += 1) {
      expect(actual[i]).to.have.ordered.members(expected[i]);
    }
  });

  it("chunk should return the input array when chunk size is less than or equal to zero", function(){
    actual.push(1, 2, 3, 4);
    expected = [];
    expect(ArrayUtils.chunk(actual, -1)).to.have.ordered.members(expected);
    expect(ArrayUtils.chunk(actual, 0)).to.have.ordered.members(expected);
  });

  it("chunk should return as many possible times (arrayLength/chunks) as possible and add the remainder divides oddly", function(){
    actual.push(1, 2, 3, 4, 5);
    actual = ArrayUtils.chunk(actual, 2);
    expected = [[1, 2], [3, 4], [5]];
    for (let i = 0; i < actual.length; i += 1) {
      expect(actual[i]).to.have.ordered.members(expected[i]);
    }
  });

  it("chunk should return as many possible times (arrayLength/chunks) as possible divides evenly", function(){
    actual.push(1, 2, 3);
    actual = ArrayUtils.chunk(actual, 1);
    expected = [[1], [2], [3]];
    for (let i = 0; i < actual.length; i += 1) {
      expect(actual[i]).to.have.ordered.members(expected[i]);
    }
  });

});