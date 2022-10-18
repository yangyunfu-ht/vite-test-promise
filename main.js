import MyPromise from "./myPromise"

console.log(import.meta.env)

const promise1 = new MyPromise((resolve, reject) => {
  resolve(100)
})

promise1.then(res => {
  console.log('fulfilled', res)
  return 2 * res
}).then(res => {
  console.log('fulfilled', res)
  return res
}).then(res => {
  console.log('fulfilled', res * 5)
})



