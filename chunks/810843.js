"use strict";
n.r(e), n.d(e, {
  getVisibilityWatcher: function() {
    return c
  }
});
var r = n("307447"),
  i = n("906617");
let a = -1,
  s = () => "hidden" !== r.WINDOW.document.visibilityState || r.WINDOW.document.prerendering ? 1 / 0 : 0,
  o = () => {
    (0, i.onHidden)(t => {
      let {
        timeStamp: e
      } = t;
      a = e
    }, !0)
  },
  c = () => (a < 0 && (a = s(), o()), {
    get firstHiddenTime() {
      return a
    }
  })