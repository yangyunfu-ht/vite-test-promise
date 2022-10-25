// 双层for循环数组去重
function removeArrayElement (arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if(arr[i] === arr[j]) {
        arr.splice(j, 1);
        len--;
        j--;
      } 
    }
  }
  return arr;
}

// Array.filter和indexOf
function uniqueArrayElement (arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Array.includes
function unipueIncludesArrElemet (arr) {
  let result = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    if(!result.includes(arr[i])) {
      result.push(arr[i])
    } else {
      return
    }
  }
  return result;
}

// es6新语法set
function uniqueSetArrElement (arr) {
  // return Array.from(new Set(arr))
  return [...new Set(arr)]
}


export {
  removeArrayElement,
  uniqueArrayElement,
  unipueIncludesArrElemet,
  uniqueSetArrElement
}