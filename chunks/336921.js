"use strict";
n.r(t), n.d(t, {
  setupWindow: function() {
    return i
  }
}), n("222007");
var a = n("741148"),
  r = n("563680"),
  s = n("816454"),
  l = n("421804");

function i(e) {
  let t = e.document,
    n = (0, s.setupWindowId)(e);

  function i() {
    (0, l.setCurrentlyInteractingWindowId)(n)
  }

  function u() {
    setTimeout(() => {
      (0, l.clearCurrentlyInteractingWindowId)(n)
    }, 0)
  }
  for (let n of (e.addEventListener("resize", function() {
      (0, a.resized)(e)
    }), e.addEventListener("focus", function() {
      (0, a.focus)(e, !0)
    }), e.addEventListener("blur", function() {
      !e.document.hasFocus() && (0, a.focus)(e, !1)
    }), e.addEventListener("unload", function() {
      (0, a.unload)(e)
    }), l.INTERACTION_EVENTS)) t.addEventListener(n, i, !0), t.addEventListener(n, u, !1);
  (0, r.subscribeDocumentToFullScreenChange)(t, function() {
    (0, a.fullscreenChange)(e)
  }), (0, a.init)(e)
}