"use strict";
i.r(e), i.d(e, {
  useIsClydePersonalityModified: function() {
    return s
  }
});
var l = i("884691"),
  r = i("65597"),
  n = i("335189"),
  a = i("473591");

function s(t) {
  let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    i = (0, r.default)([a.default], () => a.default.getSettings(t));
  return l.useEffect(() => {
    null != t && e && (0, n.fetchClydeSettings)(t)
  }, [t, e]), null != t && (null == i ? void 0 : i.personality) != null && (null == i ? void 0 : i.personality) !== ""
}