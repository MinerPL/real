"use strict";

function a(e, t, n) {
  return new MouseEvent(e, {
    screenX: t,
    screenY: n,
    clientX: t,
    clientY: n,
    bubbles: !0,
    view: window
  })
}

function l(e, t, n) {
  let a = document.elementFromPoint(t, n);
  if (null == a) throw Error();
  a.dispatchEvent(e)
}
n.r(t), n.d(t, {
  createMouseEvent: function() {
    return a
  },
  dispatchEventToPoint: function() {
    return l
  }
}), n("70102")