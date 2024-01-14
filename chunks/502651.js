"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("954016"),
  l = n("49111");

function s(e) {
  return e.type === l.ActivityTypes.STREAMING && null != e.url && a.validStreamURL.test(e.url)
}

function i(e) {
  return null != e && (Array.isArray(e) ? e.some(s) : s(e))
}