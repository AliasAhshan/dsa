function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-2, 0, 1, 3]));

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let first = 0;

  for (let second = 1; second < arr.length; second++) {
    if (arr[first] !== arr[second]) {
      first++;
      arr[first] = arr[second];
    }
  }
  return first + 1;
}

console.log(countUniqueValues([]));

function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let average = (arr[left] + arr[right]) / 2;
    if (average === target) {
      return true;
    } else if (average < target) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

console.log(averagePair([], 4));
