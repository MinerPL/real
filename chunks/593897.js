"use strict";
n.r(t), n.d(t, {
  useActiveEventOrStageInstanceChannel: function() {
    return l
  }
});
var a = n("170183"),
  s = n("42203"),
  i = n("534222");

function l(e) {
  var t;
  let n = (0, i.useFirstActiveEventChannel)(e),
    l = (0, a.default)(e),
    r = s.default.getChannel(null === (t = l[0]) || void 0 === t ? void 0 : t.id);
  return null != n ? n : r
}