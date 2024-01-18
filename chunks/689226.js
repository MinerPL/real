"use strict";
n.r(t), n.d(t, {
  getRoleIconData: function() {
    return c
  },
  replaceRoleIconSourceSize: function() {
    return f
  },
  isRoleIconAssetUrl: function() {
    return E
  },
  canGuildUseRoleIcons: function() {
    return _
  }
}), n("781738");
var i = n("867805"),
  l = n("407063"),
  a = n("315102"),
  r = n("773336"),
  s = n("49111");
let o = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
  u = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
  d = (0, r.isAndroid)(),
  c = (e, t) => {
    if (null == e) return null;
    let n = null != e.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
    return {
      customIconSrc: h(e, t),
      unicodeEmoji: null != n ? n : void 0
    }
  },
  f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, l.getBestMediaProxySize)(t * (0, l.getDevicePixelRatio)()))),
  h = (e, t) => {
    let {
      id: n,
      icon: i
    } = e;
    if (null == i) return;
    if (i.startsWith("data:")) return i;
    let r = a.SUPPORTS_WEBP ? "webp" : "png",
      c = "",
      f = "quality=lossless";
    return (null != t && (c = "size=" + (0, l.getBestMediaProxySize)(t * (0, l.getDevicePixelRatio)()), f = d ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(o, "/").concat(n, "/").concat(i, ".").concat(r, "?").concat(c).concat(f) : "".concat(u).concat(s.Endpoints.ROLE_ICON(n, i), "?").concat(c)
  },
  E = e => e.startsWith(o) || e.startsWith("".concat(u, "/roles")) && e.includes("/icons/"),
  _ = (e, t) => {
    var n;
    let i = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
    return i || e.features.has(s.GuildFeatures.ROLE_ICONS)
  }