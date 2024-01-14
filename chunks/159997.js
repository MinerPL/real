"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("702976");
var a = n("292687"),
  s = n("568734"),
  i = n("49111");

function l(e) {
  var t;
  let n = (0, s.hasFlag)(null !== (t = e.flags) && void 0 !== t ? t : 0, i.ApplicationFlags.EMBEDDED),
    l = a.default.getWindowOpen(i.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
  return n && l
}