"use strict";
n.r(t), n.d(t, {
  makeDesktopDownloadURL: function() {
    return s
  },
  getPlatformReadableName: function() {
    return c
  },
  getCurrentPlatformDownloadURL: function() {
    return p
  },
  getMobileDownloadLink: function() {
    return f
  }
});
var a = n("597755"),
  r = n.n(a),
  i = n("815157"),
  l = n("271938"),
  o = n("49111");
let u = "linux";

function s(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : void 0;
  return "".concat(o.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
}

function d() {
  var e;
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = r.os) || void 0 === e ? void 0 : e.family;
  return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? u : -1 !== t.indexOf("OS X") ? "osx" : "win"
}

function c(e) {
  return ({
    win: "Windows",
    osx: "Mac",
    [u]: "Linux"
  })[d(e)]
}

function p() {
  let e = d();
  return s(e, !1, e === u ? "tar.gz" : null)
}

function f(e, t, n) {
  let a = null != n ? n.toString() : null;
  switch (t) {
    case "iOS":
      return (0, i.default)(null != a ? a : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
        utmSource: e,
        fingerprint: l.default.getFingerprint(),
        attemptId: (0, i.generateAttemptId)()
      });
    case "Android":
      return (0, i.default)(null != a ? a : "https://play.google.com/store/apps/details", {
        utmSource: e,
        id: "com.discord",
        fingerprint: l.default.getFingerprint(),
        attemptId: (0, i.generateAttemptId)()
      });
    default:
      return null != a ? a : "https://www.discord.com"
  }
}