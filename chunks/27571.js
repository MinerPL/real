"use strict";

function a(e, t) {
  let n = 0,
    a = Math.min(e.length, t.length);
  for (let l = 0; l < a; l++) n |= e.charCodeAt(l) ^ t.charCodeAt(l);
  return 0 === n && e.length === t.length
}
n.r(t), n.d(t, {
  constantTimeCompare: function() {
    return a
  }
})