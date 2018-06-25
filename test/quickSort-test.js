const assert = require('chai').assert
const quickSort = require('../quickSort.js')

describe("quickSort", function(){
  it("can sort an array in ascending order", function(){
    assert.deepEqual(quickSort([5,3,1,7]), [1,3,5,7])
  });
});
