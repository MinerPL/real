"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var a = n("917351"),
  s = n.n(a),
  i = n("605250"),
  l = n("374363"),
  r = n("271938"),
  o = n("968027"),
  u = n("802493"),
  d = n("723939"),
  c = n("11275");
let f = new i.default("UserSettingsProto");
var E = new class e {
  async getAll(e) {
    if (o.isStable) return {};
    let t = performance.now(),
      n = await u.default.userSettings(e).getMany(),
      a = performance.now();
    f.verbose("loaded in ".concat(a - t, "ms (settings: ").concat(n.length, ")"));
    let s = {};
    for (let e of n) s[e.id] = e.value;
    return s
  }
  handleClear(e) {
    u.default.userSettingsTransaction(e).delete()
  }
  handleReset() {}
  constructor() {
    this.actions = {
      CLEAR_CACHES: (e, t) => this.handleClear(t),
      CLEAR_GUILD_CACHE: (e, t) => this.handleClear(t),
      CONNECTION_OPEN: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_UPDATE: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_ENQUEUE_UPDATE: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: () => this.throttledOnChange()
    }, this.handleUserSettingsProtoChange = () => {
      if (o.isStable) return;
      let e = r.default.getId(),
        t = d.default.database(e);
      null == t || t.transaction(e => {
        let t = l.default.computeState(),
          n = u.default.userSettingsTransaction(e);
        for (let e in t) n.put({
          id: Number(e),
          value: t[e]
        });
        c.default.handleUserSettingsProtoChange(e)
      }, "handleUserSettingsProtoChange")
    }, this.throttledOnChange = s.debounce(this.handleUserSettingsProtoChange, 0)
  }
}