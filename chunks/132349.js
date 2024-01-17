"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007");
var s = n("876927"),
  l = n("271560");

function a(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    [n, a] = (0, s.default)(),
    i = (null == e ? void 0 : e.application_id) != null && null != a ? (0, l.getAssetURL)(e.application_id, e, a, t ? void 0 : "webp") : void 0;
  return [n, i]
}