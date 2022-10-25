// 判断元素是否进入可视区
export default function getElementInViewPort (el, distance = 500) {
  const viewPort = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  const offSetTop = el.offsetTop;
  const scrollTop = document.documentElement.scrollTop;
  const top = offSetTop - scrollTop;
  // return top <= viewPort
  return {
    viewPort,
    offSetTop,
    scrollTop,
    top,
    flags: top <= viewPort + distance
  }
}