"use strict";
n.r(t), n.d(t, {
  ProcessArgs: function() {
    return r
  }
});
var i = n("49671");
class r {
  static get() {
    if (null == r.cached) {
      var e, t;
      let n = null === i.default || void 0 === i.default ? void 0 : null === (t = i.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t);
      null != n && n.length > 1 && n.shift(), r.cached = null != n ? n : []
    }
    return r.cached
  }
  static contains(e) {
    return r.get().includes(e)
  }
  static isEnvVariableTrue(e) {
    var t, n;
    if (void 0 === i.default) return !1;
    switch (null === i.default || void 0 === i.default ? void 0 : null === (n = i.default.process) || void 0 === n ? void 0 : null === (t = n.env) || void 0 === t ? void 0 : t[e]) {
      case "1":
      case "true":
        return !0
    }
    return !1
  }
  static isDisallowPopupsSet() {
    return r.contains("--disallow-popups") || r.isEnvVariableTrue("DISCORD_DISALLOW_POPUPS")
  }
  static isDiscordTestSet() {
    return r.isEnvVariableTrue("DISCORD_TEST")
  }
  static isDiscordGatewayPlaintextSet() {
    return !1
  }
}