const should = require('chai').should();
const {
  sortedIndexOfTimeComplexity,
  findDuplicatesTimeComplexity,
  bruteForcePasswordTimeComplexity,
  hasDuplicatesTimeComplexity,
  removeLastThreeElementsTimeComplexity,
  increasingStepTimeComplexity,
  makeRangeTimeComplexity,
  TimeComplexity
} = require('./algo-time-complexity');

describe('algorithm time complexity', function() {
  it('should be \'logarithmic\' for sortedIndexOf', function() {
    sortedIndexOfTimeComplexity.should.equal(TimeComplexity.LOGARITHMIC);
  });

  it('should be \'linear\' for findDuplicates', function() {
    findDuplicatesTimeComplexity.should.equal(TimeComplexity.LINEAR);
  });

  it('should be \'exponential\' for bruteForcePassword', function() {
    bruteForcePasswordTimeComplexity.should.equal(TimeComplexity.EXPONENTIAL);
  });

  it('should be \'quadratic\' for hasDuplicates', function() {
    hasDuplicatesTimeComplexity.should.equal(TimeComplexity.QUADRATIC);
  });

  it('should be \'constant\' for removeLastThreeElements', function() {
    removeLastThreeElementsTimeComplexity.should.equal(TimeComplexity.CONSTANT);
  });

  it('should be \'logarithmic\' for increasingStep', function() {
    increasingStepTimeComplexity.should.equal(TimeComplexity.LOGARITHMIC);
  });

  it('should be \'linear\' for makeRange', function() {
    makeRangeTimeComplexity.should.equal(TimeComplexity.LINEAR);
  });
});
