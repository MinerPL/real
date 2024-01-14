"use strict";
a.r(t), a.d(t, {
  default: function() {
    return l
  }
});
var n = a("393414"),
  s = a("49111");

function l() {
  let e = (0, n.getHistory)();
  e.length > 0 ? e.goBack() : (0, n.transitionTo)(s.Routes.ME)
}