export default function myJoin (targetArray, code = ',') {
  if (Array.isArray(targetArray)) {
    let resultStr = ''
    for(let i = 0; i < targetArray.length; i++) {
      resultStr += `${targetArray[i]}${ i === targetArray.length - 1 ? '' : code }`
    }
    return resultStr
  } else {
    throw new Error('targetArray must is a Array')
  }
}