"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var i = n("605250"),
  s = n("374363"),
  r = n("968027"),
  a = n("802493");
let o = new i.default("NonGuildVersions");
var l = new class e {
  async getCommittedVersions() {
    if (r.isStable) return {};
    try {
      let e = a.default.nonGuildVersions();
      if (null == e) return {};
      let t = (await e.getMany()).map(e => [e.id, e.version]);
      return Object.fromEntries(null != t ? t : [])
    } catch (e) {
      return o.warn("couldn't load guild versions", e), {}
    }
  }
  handleUserSettingsProtoChange(e) {
    var t, n;
    if (r.isStable) return;
    let i = null !== (n = null === (t = s.default.settings.versions) || void 0 === t ? void 0 : t.dataVersion) && void 0 !== n ? n : -1;
    a.default.nonGuildVersionsTransaction(e).put({
      id: "user_settings_version",
      version: i
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