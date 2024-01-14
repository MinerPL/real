"use strict";

function s(e, t) {
  return !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }))
}
n.r(t), n.d(t, {
  _: function() {
    return s
  }
})