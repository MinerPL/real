"use strict";

function s(e, t) {
  var n;
  let s = decodeURIComponent(t),
    l = null !== (n = s.split("/").pop()) && void 0 !== n ? n : "temp.gif";
  return "".concat(e, "-").concat(l)
}
n.r(t), n.d(t, {
  getFileNameFromGifUrl: function() {
    return s
  }
}), n("186859")