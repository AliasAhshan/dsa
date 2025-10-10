function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let freq1 = {};
  let freq2 = {};

  for (let char of str1) {
    freq1[char] = (freq1[char] || 0) + 1;
    console.log(freq1);
  }

  for (let char of str2) {
    freq2[char] = (freq2[char] || 0) + 1;

    console.log(freq2);
  }

  for (let key in freq1) {
    if (!(freq2[key] === freq1[key])) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram('hello', 'bello'));

function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();

  if (str1.length !== str2.length) {
    return false;
  }

  let freq1 = {};
  let freq2 = {};

  for (let char of str1) {
    freq1[char] = (freq1[char] || 0) + 1;
    console.log(freq1);
  }

  for (let char of str2) {
    freq2[char] = (freq2[char] || 0) + 1;
    console.log(freq2);
  }

  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }
  return true;
}
console.log(sameFrequency(182, 281));

function areThereDuplicates(...args) {
  freq = {};

  for (let val of args) {
    freq[val] = (freq[val] || 0) + 1;
    if (freq[val] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 2));

function sameSquares(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let freq1 = {};
  let freq2 = {};

  for (let val of arr1) {
    freq1[val] = (freq1[val] || 0) + 1;
    console.log(freq1);
  }

  for (let val of arr2) {
    freq2[val] = (freq2[val] || 0) + 1;
    console.log(freq2);
  }

  for (let key in freq1) {
    if (!(key ** 2 in freq2)) {
      console.log(freq2);
      return false;
    }

    if (freq2[key ** 2] !== freq1[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameSquares([2, 2, 3], [4, 9, 4]));
