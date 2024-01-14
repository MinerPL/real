"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var i = n("446674"),
  r = n("705909"),
  s = n("913144"),
  a = n("605250"),
  o = n("271938"),
  l = n("496533");
let u = new a.default("DatabaseManager");
class c extends i.Store {
  initialize() {
    this.waitFor(o.default), this.carefullySpeculativelyOpen(l.getUserId()), this.handleAuthenticationStoreChanged(), o.default.addChangeListener(() => this.handleAuthenticationStoreChanged())
  }
  databaseName(e) {
    return d(e)
  }
  database(e) {
    if (null != e) {
      var t;
      return null !== (t = this.databases.get(e)) && void 0 !== t ? t : null
    }
    return null
  }
  carefullyOpenDatabase(e) {
    if (null != e && !this.databases.has(e)) {
      let t = function(e) {
        return null
      }(e);
      u.verbose("added database (".concat(e, " → ").concat(t, ")")), this.databases.set(e, t), this.emitChange()
    }
    return this.database(e)
  }
  replaceDisableAllDatabases(e) {
    for (let t of (u.info("disabling and nulling all databases (reason: ".concat(e, ")")), this.databases.keys())) {
      let n = this.databases.get(t);
      null == n || n.disable(e), null == n || n.close(), this.databases.set(t, null)
    }
    this.emitChange()
  }
  remove(e) {
    let t = this.databases.get(e);
    u.log("removing database (user: ".concat(e, ", database: ").concat(t, ")")), null == t || t.close(), this.databases.delete(e), this.emitChange()
  }
  handleClearCaches() {
    this.replaceDisableAllDatabases("DatabaseManager (action: CLEAR_CACHES)")
  }
  handleConnectionOpen() {
    let e = o.default.getId(),
      t = this.databases.get(e),
      n = null == t ? void 0 : t.state();
    null == t && n !== r.DatabaseState.Open && this.remove(e), this.carefullyOpenDatabase(e)
  }
  handleAuthenticationStoreChanged() {
    let e = o.default.getId(),
      t = this.activeUserId;
    if (e !== t) {
      let n = this.databases.get(t);
      u.verbose("active user changed (now: ".concat(e, ", was: ").concat(t, ", was: ").concat(n, ")")), null == n || n.close(), l.setUserId(e), this.activeUserId = e, this.databases.delete(t)
    }
  }
  async carefullySpeculativelyOpen(e) {
    if (null != e) {
      let t = await f(e);
      null == t || this.databases.has(e) ? (u.verbose("discarding speculative database (".concat(e, " → ").concat(t, ")")), null == t || t.close()) : (u.verbose("added speculative database (".concat(e, " → ").concat(t, ")")), this.databases.set(e, t), this.emitChange())
    }
  }
  constructor() {
    super(s.default, {
      CLEAR_CACHES: () => this.handleClearCaches(),
      CONNECTION_CLOSED: () => this.handleAuthenticationStoreChanged(),
      CONNECTION_OPEN: () => this.handleConnectionOpen(),
      LOGOUT: () => this.handleAuthenticationStoreChanged()
    }, s.DispatchBand.Early), this.databases = new Map, this.activeUserId = null
  }
}

function d(e) {
  return "@account.".concat(e)
}
async function f(e) {
  var t;
  return null
}
var E = new c