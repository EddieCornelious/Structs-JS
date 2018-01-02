const Structs = require("../bundle.js");
const expect = require("chai").expect;

describe("HashMultiMap", function() {
  let map, expected, actual;
  beforeEach(function() {
    map = new Structs.HashMultiMap();
  });
  afterEach( function() {
    map,
    expected,
    actual = null;
  });
 
});