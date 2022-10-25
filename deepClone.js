export default function deepClone (target, map = new WeakMap()) {
  if (typeof target === 'object') {
    let cloneTraget = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return map.get(target)
    }
    map.set(target, cloneTraget)
    for (let key in target) {
      cloneTraget[key] = deepClone(target[key], map);
    }
    return cloneTraget;
  } else {
    return target;
  }
}
