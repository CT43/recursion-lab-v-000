function printString(string) {
  console.log(string[0]);

  if (string.length > 1) {
    let subString = string.substring(1, string.length);
    printString(subString);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string.length < 2) {
    return string;
  } else {
    return reverseString(string.substring(1)) + string[0];
  }
}

function isPalindrome(string) {
  if (string.length < 2){
    return true
  }
  if (string[0] === string[string.length - 1]){
    return isPalindrome(string.substring(1, string.length - 1))
  }
  else {
    return false
  }
}

function addUpTo(arr, index) {
  if (index != 0){
  return arr[index] + addUpTo(arr, (index - 1))
} else {
  return arr[index]
}
}

function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0]
  }
  if (arr.length > 1){
  let largest = arr[0] > arr[1] ? arr[0] : arr[1]
  let sliceArray = arr.slice(2)
  let newArray = [largest, ...sliceArray]
  return maxOf([largest, ...arr.slice(2)])
}
}

function includesNumber(arr, num) {
  if (arr[0] === num) {
    return true
  } else if (arr.length === 1) {
    return false
  } else {
    return includesNumber(arr.slice(1), num)
  }
}
