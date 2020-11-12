/**
 * Identify the Big-O time complexity of the following functions,
 * relative to the size of the input
 */

var TimeComplexity = {
  FIX_ME: 'wrong answer',
  CONSTANT: 'constant',
  LOGARITHMIC: 'logarithmic',
  LINEAR: 'linear',
  QUADRATIC: 'quadratic',
  EXPONENTIAL: 'exponential'
};
exports.TimeComplexity = TimeComplexity;

exports.sortedIndexOfTimeComplexity = /* START SOLUTION */TimeComplexity.FIXME;/* ELSE TimeComplexity.FIX_ME; END SOLUTION */ // TODO: Update this constant

var sortedIndexOf = function(array, targetElement) {
  var minIndex = 0;
  var maxIndex = array.length - 1;
  var currentIndex;
  var currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < targetElement) {
      minIndex = currentIndex + 1;
    } else if (currentElement > targetElement) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }

  return -1;
};


exports.findDuplicatesTimeComplexity = /* START SOLUTION */TimeComplexity.FIXME;/* ELSE TimeComplexity.FIX_ME; END SOLUTION */ // TODO: Update this constant

var findDuplicates = function(string) {
  var tracker = {};
  var result = [];
  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    tracker[letter] = tracker[letter] || 0;

    if (tracker[letter] === 1) {
      result.push(letter);
    }

    tracker[letter] += 1;
  }
  return result;
};


exports.bruteForcePasswordTimeComplexity = /* START SOLUTION */TimeComplexity.FIXME;/* ELSE TimeComplexity.FIX_ME; END SOLUTION */ // TODO: Update this constant

var bruteForcePassword = function(max) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';

  var findPassword = function(attempt) {
    if (attempt.length > 0) {
      console.log('Trying ' + attempt);
    }
    if (attempt.length <= max) {
      for (var i = 0; i < alphabet.length; i++) {
        findPassword(attempt.concat(alphabet[i]));
      }
    }
  };

  findPassword('');
};


exports.hasDuplicatesTimeComplexity = /* START SOLUTION */TimeComplexity.FIXME;/* ELSE TimeComplexity.FIX_ME; END SOLUTION */ // TODO: Update this constant

var hasDuplicates = function(array) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (array.slice(i + 1).indexOf(item) !== -1) {
      return true;
    }
  }
  return false;
};



exports.removeLastThreeElementsTimeComplexity = /* START SOLUTION */TimeComplexity.FIXME;/* ELSE TimeComplexity.FIX_ME; END SOLUTION */ // TODO: Update this constant

var removeLastThreeElements = function(array) {
  var numberOfElementsToRemove = 3;

  while (numberOfElementsToRemove-- > 0) {
    array.pop();
  }
};


exports.increasingStepTimeComplexity = /* START SOLUTION */TimeComplexity.FIXME;/* ELSE TimeComplexity.FIX_ME; END SOLUTION */ // TODO: Update this constant

var increasingStep = function(number) {
  for (var i = 1; i < number; i = i * 2) {
    console.log(i);
  }
};


exports.makeRangeTimeComplexity = /* START SOLUTION */TimeComplexity.FIXME;/* ELSE TimeComplexity.FIX_ME; END SOLUTION */ // TODO: Update this constant

var makeRange = function(array) {
  array.forEach(function(item) {
    for (var i = 1; i < 10; i++) {
      console.log(item + i);
    }
  });
};

