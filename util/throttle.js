export default function throttel (fn ,delay) {
  const timer = null;
  return function (...args) {
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  }
}