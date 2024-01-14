"use strict";
r.r(t), r.d(t, {
  default: function() {
    return s
  }
}), r("222007");
var l = r("509043"),
  i = r("462274"),
  o = r("449918"),
  n = r("49111");

function s(e, t) {
  var r, s;
  let {
    pendingThemeColors: a,
    isPreview: u
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, d = null == e ? void 0 : e.getAvatarURL(null == t ? void 0 : t.guildId, 80), c = (0, o.useColorValue)(n.Color.PRIMARY_530).hex, [f, E] = (0, i.useAvatarColors)(d, c, !1);
  if (!(null == t ? void 0 : t.canEditThemes) && !u) return [null, null];
  let p = null == t ? void 0 : t.getPreviewThemeColors(a),
    P = null !== (r = null == p ? void 0 : p[0]) && void 0 !== r ? r : (0, l.hex2int)(f),
    T = null !== (s = null == p ? void 0 : p[1]) && void 0 !== s ? s : (0, l.hex2int)(E);
  return [P, T]
}