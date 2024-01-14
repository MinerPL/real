"use strict";
s.r(t), s.d(t, {
  useIsMFAEnabled: function() {
    return r
  }
});
var a = s("65597"),
  n = s("900938"),
  l = s("697218"),
  i = s("49111");

function r() {
  let e = (0, a.default)([l.default], () => l.default.getCurrentUser()),
    t = (0, a.default)([n.default], () => n.default.getProps().mfaLevel),
    s = (null == e ? void 0 : e.mfaEnabled) === !0,
    r = t === i.MFALevels.ELEVATED;
  return {
    isUserMFAEnabled: s,
    isModerationMFAEnabled: r
  }
}