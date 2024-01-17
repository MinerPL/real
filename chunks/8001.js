"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("75247"),
  l = n("913144"),
  s = n("605250"),
  i = n("718517"),
  r = n("802493");
let d = new s.default("FileSystemStore"),
  u = 10 * i.default.Millis.MINUTE;
class o extends a.default {
  handlePostConnectionOpen() {
    return this.refresh(), !1
  }
  handleAppStateUpdate(e) {
    return "active" !== e.state && this.refresh(), !1
  }
  async refresh() {
    var e, t;
    let n = await (null === (t = r.default.database()) || void 0 === t ? void 0 : null === (e = t.fsInfo()) || void 0 === e ? void 0 : e.catch(e => d.warn("couldn't get fs info", e)));
    if (null != n) {
      let e = n.fs.available < 268435456 || n.fs.available < 3 * n.database.used || n.fs.available < 2 * n.database.total,
        t = n.fs.available > 805306368 && n.fs.available > 4 * n.database.used && n.fs.available > 4 * n.database.total,
        a = !!e || !t && null;
      null != a && this.isLowDisk !== a && (this.isLowDisk = a, this.emitChange())
    }
  }
  constructor() {
    super(l.default, {
      APP_STATE_UPDATE: e => this.handleAppStateUpdate(e),
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    }), this.isLowDisk = !1, this.refresh(), this.waitFor(r.default), setInterval(() => this.refresh(), u)
  }
}
var c = new o