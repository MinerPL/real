"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("872717"),
  a = n("913144"),
  l = n("49111"),
  i = {
    show(e, t) {
      a.default.wait(() => a.default.dispatch({
        type: "TUTORIAL_INDICATOR_SHOW",
        tutorialId: e,
        renderData: t
      }))
    },
    hide(e) {
      a.default.wait(() => a.default.dispatch({
        type: "TUTORIAL_INDICATOR_HIDE",
        tutorialId: e
      }))
    },
    dismiss(e) {
      a.default.wait(() => a.default.dispatch({
        type: "TUTORIAL_INDICATOR_DISMISS",
        tutorialId: e
      })), s.default.put({
        url: l.Endpoints.TUTORIAL_INDICATOR(e),
        oldFormErrors: !0
      })
    },
    suppressAll() {
      a.default.dispatch({
        type: "TUTORIAL_INDICATOR_SUPPRESS_ALL"
      }), s.default.post({
        url: l.Endpoints.TUTORIAL_INDICATORS_SUPPRESS,
        oldFormErrors: !0
      })
    }
  }