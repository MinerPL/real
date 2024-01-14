"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
});
var a = s("37983");
s("884691");
var n = s("393414"),
  r = s("479287"),
  o = s("545358"),
  l = e => {
    let {
      onClose: t
    } = e;
    return (0, a.jsx)(r.default, {
      transitionTo: e => {
        (0, n.transitionTo)(e)
      },
      replaceWith: e => {
        (0, n.replaceWith)(e)
      },
      authBoxClassName: o.card,
      closeLogin: t
    })
  }