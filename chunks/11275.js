"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var s = n("605250"),
  i = n("374363"),
  r = n("968027"),
  a = n("802493");
let o = new s.default("NonGuildVersions");
var d = new class e {
  getCommittedVersions() {
    if (r.isStable) return new Map;
    try {
      var e, t;
      let n = null === (t = a.default.nonGuildVersions()) || void 0 === t ? void 0 : null === (e = t.getManySyncUnsafe()) || void 0 === e ? void 0 : e.map(e => [e.id, e.version]);
      return new Map(null != n ? n : [])
    } catch (e) {
      return o.warn("couldn't load guild versions", e), new Map
    }
  }
  handleUserSettingsProtoChange(e) {
    var t, n;
    if (r.isStable) return;
    let s = null !== (n = null === (t = i.default.settings.versions) || void 0 === t ? void 0 : t.dataVersion) && void 0 !== n ? n : -1;
    a.default.nonGuildVersionsTransaction(e).put({
      id: "user_settings_version",
      version: s
    })
  }
  handleClear(e) {
    a.default.nonGuildVersionsTransaction(e).delete()
  }
  handleReset() {}
  constructor() {
    this.actions = {
      CLEAR_CACHES: (e, t) => this.handleClear(t),
      CLEAR_GUILD_CACHE: (e, t) => this.handleClear(t)
    }
  }
}