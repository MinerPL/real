"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("522632"),
  l = n("407063"),
  a = n("315102"),
  i = n("49111");

function r(e) {
  let t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.AVATAR_SIZE,
    o = n && (0, a.isAnimatedIconHash)(e.avatar_hash) ? "gif" : "jpg",
    u = e.clyde_profile_id;
  if (null == e.avatar_hash) return null;
  let {
    CDN_HOST: d
  } = window.GLOBAL_ENV;
  return null != d ? ("jpg" === o && (o = a.SUPPORTS_WEBP ? "webp" : "png"), t = "".concat(location.protocol, "//").concat(d).concat(i.Endpoints.CLYDE_PROFILES_AVATAR(u, e.avatar_hash, o))) : t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + i.Endpoints.CLYDE_PROFILES_AVATAR(u, e.avatar_hash, o), t + "?".concat(s.stringify({
    size: (0, l.getBestMediaProxySize)(r * (0, l.getDevicePixelRatio)())
  }))
}