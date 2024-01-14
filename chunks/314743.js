"use strict";

function a(e, t) {
  var n;
  let a = decodeURIComponent(t),
    s = null !== (n = a.split("/").pop()) && void 0 !== n ? n : "temp.gif";
  return "".concat(e, "-").concat(s)
}
n.r(t), n.d(t, {
  getFileNameFromGifUrl: function() {
    return a
  }
}), n("186859")