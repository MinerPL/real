"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("75247"),
  l = n("913144"),
  s = n("605250"),
  i = n("802493");
let r = new s.default("FileSystemStore"),
  d = 6e5;
class u extends a.default {
  handlePostConnectionOpen() {
    return this.refresh(), !1
  }
  handleAppStateUpdate(e) {
    return "active" !== e.state && this.refresh(), !1
  }
  async refresh() {
    var e, t;
    let n = await (null === (t = i.default.database()) || void 0 === t ? void 0 : null === (e = t.fsInfo()) || void 0 === e ? void 0 : e.catch(e => r.warn("couldn't get fs info", e)));
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
    }), this.isLowDisk = !1, this.refresh(), this.waitFor(i.default), setInterval(() => this.refresh(), d)
  }
}
var o = new u