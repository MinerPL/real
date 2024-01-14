"use strict";
n.r(t), n.d(t, {
  useExplicitContentSettingOrDefault: function() {
    return r
  }
});
var l = n("65597"),
  a = n("151426"),
  s = n("374363"),
  i = n("447435");
let r = () => {
  let e = (0, l.useStateFromStoresObject)([s.default], () => {
    var e, t;
    return null !== (t = null === (e = s.default.settings.textAndImages) || void 0 === e ? void 0 : e.explicitContentSettings) && void 0 !== t ? t : (0, i.getExplicitContentSettingOrDefault)()
  });
  return {
    explicitContentGuilds: (null == e ? void 0 : e.explicitContentGuilds) === void 0 || (null == e ? void 0 : e.explicitContentGuilds) === a.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? (0, i.resolveDefaultSetting)() : e.explicitContentGuilds,
    explicitContentNonFriendDm: (null == e ? void 0 : e.explicitContentNonFriendDm) === void 0 || (null == e ? void 0 : e.explicitContentNonFriendDm) === a.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? (0, i.resolveDefaultSetting)(!0) : e.explicitContentNonFriendDm,
    explicitContentFriendDm: (null == e ? void 0 : e.explicitContentFriendDm) === void 0 || (null == e ? void 0 : e.explicitContentFriendDm) === a.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? (0, i.resolveDefaultSetting)(!0, !0) : e.explicitContentFriendDm
  }
}