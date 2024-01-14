"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
}), l("222007");
var n = l("570277"),
  a = l.n(n),
  s = l("773336");
let r = {
  [s.PlatformTypes.WINDOWS]: {
    nvidia: "<=537.58.0 || >=546.31"
  }
};

function i(e) {
  let t = r[(0, s.getPlatform)()];
  if (null == t) return !1;
  for (let l of Object.keys(e)) {
    let n = e[l],
      s = t[l];
    if (null == n || null == s || null != n.error) continue;
    let r = function(e) {
      var t, l;
      return "".concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".").concat(null !== (l = e.minor) && void 0 !== l ? l : 0, ".0")
    }(n);
    if (!a.satisfies(r, s)) return !0
  }
  return !1
}