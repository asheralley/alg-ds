// Frequency Counter Pattern
// comparing two arrays -> is squared value present in array 2 and at some frequency

// Naive result
// BigO n^2
function naiveSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// Using the frequency counter pattern
// BigO of ~n - linear time
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

let result = same([1, 3, 2, 2, 5], [9, 1, 4, 4, 11]);

// console.log(result);

// Anagrams -> Frequency counter

function validAnagram(str1, str2) {
  // first check lengths, if != then return false
  if (str1.length !== str2.length) {
    return false;
  }
  let freqCount1 = {};
  let freqCount2 = {};

  for (let val of str1) {
    freqCount1[val] = (freqCount1[val] || 0) + 1;
  }
  for (let val of str2) {
    freqCount2[val] = (freqCount2[val] || 0) + 1;
  }
  for (let key in freqCount1) {
    if (!(freqCount2[key] === freqCount1[key])) {
      return false;
    }
  }
  return true;
}

let anagram = validAnagram("tar", "cat");

// Course solution

function validAnagramCourseSolution(st1, st2) {
  if (st1.length !== st2.length) {
    return false;
  }

  const lookup = {};
  for (let i = 0; i < st1.length; i++) {
    let letter = st1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < st2.length; i++) {
    let letter = st2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

let test = validAnagramCourseSolution("xir", "irr");

//console.log(test);

// Multiple pointers pattern

// sumzero - a function that takes a sorted array that returns the first pair
// that sums to zero

// naive solution:
// time complexity = O(n^2)
// space complexity = O(1)
function sumZeroNaive(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// multiple pointers solution
// time complexity = O(n)
// space complexity = O(1)
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] - arr[right];
    if (sum === 0) {
      return [arr[i], arr[j]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// multiple pointer count unique values
function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  let uniqueIndex = 0;
  let checker = 1;

  for (checker; checker < arr.length; checker++) {
    if (arr[uniqueIndex] !== arr[checker]) {
      uniqueIndex++;
      arr[uniqueIndex] = arr[checker];
    }
    console.log(uniqueIndex, checker);
  }

  return uniqueIndex + 1;
}

let ahhh = countUniqueValues([1, 1, 2, 3, 4, 4, 4, 5, 6]);
// console.log(ahhh);

// Sliding window pattern
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// Divide and Conquer Pattern
