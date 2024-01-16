"use strict";
n.r(t), n.d(t, {
  makeDesktopDownloadURL: function() {
    return u
  },
  getPlatformReadableName: function() {
    return c
  },
  getCurrentPlatformDownloadURL: function() {
    return _
  },
  getMobileDownloadLink: function() {
    return E
  }
});
var r = n("597755"),
  s = n.n(r),
  a = n("815157"),
  o = n("271938"),
  l = n("49111");
let i = "linux";

function u(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : void 0;
  return "".concat(l.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
}

function d() {
  var e;
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = s.os) || void 0 === e ? void 0 : e.family;
  return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? i : -1 !== t.indexOf("OS X") ? "osx" : "win"
}

function c(e) {
  return ({
    win: "Windows",
    osx: "Mac",
    [i]: "Linux"
  })[d(e)]
}

function _() {
  let e = d();
  return u(e, !1, e === i ? "tar.gz" : null)
}

function E(e, t, n) {
  let r = null != n ? n.toString() : null;
  switch (t) {
    case "iOS":
      return (0, a.default)(null != r ? r : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
        utmSource: e,
        fingerprint: o.default.getFingerprint(),
        attemptId: (0, a.generateAttemptId)()
      });
    case "Android":
      return (0, a.default)(null != r ? r : "https://play.google.com/store/apps/details", {
        utmSource: e,
        id: "com.discord",
        fingerprint: o.default.getFingerprint(),
        attemptId: (0, a.generateAttemptId)()
      });
    default:
      return null != r ? r : "https://www.discord.com"
  }
}