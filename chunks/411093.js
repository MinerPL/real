"use strict";

function i(e, t) {
  let n = e.parentElement;
  for (; null != n;) {
    if (n.classList.contains(t)) return n;
    n = n.parentElement
  }
  return null
}
n.r(t), n.d(t, {
  default: function() {
    return i
  }
})