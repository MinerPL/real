"use strict";
l.r(r), l.d(r, {
  default: function() {
    return a
  }
}), l("222007");
var t = l("509043"),
  o = l("462274"),
  i = l("449918"),
  n = l("49111");

function a(e, r) {
  var l, a;
  let {
    pendingThemeColors: s,
    isPreview: u
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, f = null == e ? void 0 : e.getAvatarURL(null == r ? void 0 : r.guildId, 80), d = (0, i.useColorValue)(n.Color.PRIMARY_530).hex, [c, P] = (0, o.useAvatarColors)(f, d, !1);
  if (!(null == r ? void 0 : r.canEditThemes) && !u) return [null, null];
  let E = null == r ? void 0 : r.getPreviewThemeColors(s),
    T = null !== (l = null == E ? void 0 : E[0]) && void 0 !== l ? l : (0, t.hex2int)(c),
    p = null !== (a = null == E ? void 0 : E[1]) && void 0 !== a ? a : (0, t.hex2int)(P);
  return [T, p]
}