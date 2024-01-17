"use strict";
E.r(_), E.d(_, {
  default: function() {
    return n
  }
}), E("843762"), E("424973");
let t = null == E.g.__getTotalRequireTime ? () => 0 : () => E.g.__getTotalRequireTime(),
  o = "undefined" != typeof performance;
var n = new class e {
  get isTracing() {
    return !!o && !!this.isTracing_ && (!(Date.now() > this.endTime_) || (this.isTracing_ = !1, !1))
  }
  get endTime() {
    return this.endTime_
  }
  set endTime(e) {
    this.endTime_ = e, this.isTracing_ = !0
  }
  resumeTracing() {
    !this.isTracing && (this.logGroups.unshift({
      index: this.logGroups.length,
      timestamp: Date.now(),
      logs: [],
      nativeLogs: []
    }), this.logs = this.logGroups[0].logs), this.endTime = Date.now() + 1e4
  }
  mark(e, _, E) {
    this.isTracing && (this.logs.push({
      emoji: e,
      prefix: "".concat(this.prefix),
      log: _,
      delta: E,
      timestamp: Date.now()
    }), this.addImportLogDetail())
  }
  markAndLog(e, _, E, t) {
    e.log(E), this.isTracing && (this.logs.push({
      emoji: _,
      prefix: this.prefix,
      log: E,
      delta: t,
      timestamp: Date.now()
    }), this.addImportLogDetail())
  }
  addImportLogDetail() {
    let e = t();
    e - this.lastImportDuration > 25 && (this.addDetail("JS Imports", Math.ceil(e) + "ms"), this.lastImportDuration = e)
  }
  markWithDelta(e, _) {
    let E = this.logs[this.logs.length - 1];
    this.mark(e, _, null != E && null != E.timestamp ? Date.now() - E.timestamp : void 0)
  }
  markAt(e, _, E) {
    var t, o;
    if (!this.isTracing) return;
    let n = 0;
    for (; n < this.logs.length; n++) {
      let {
        timestamp: e
      } = this.logs[n];
      if (null != e && e > E) break
    }
    this.logs.splice(n, 0, {
      emoji: e,
      log: _,
      timestamp: E,
      prefix: null !== (o = null === (t = this.logs[n]) || void 0 === t ? void 0 : t.prefix) && void 0 !== o ? o : ""
    })
  }
  addDetail(e, _) {
    this.isTracing && this.logs.push({
      emoji: this.logs[this.logs.length - 1].emoji,
      prefix: this.prefix,
      log: "  ↪ ".concat(e, " ").concat(_)
    })
  }
  time(e, _, E) {
    if (!this.isTracing) return E();
    let t = this.prefix;
    this.mark(e, "Start ".concat(_)), this.prefix += "| ";
    let o = Date.now(),
      n = E(),
      r = Date.now() - o;
    return this.prefix = t, this.mark(e, "Finish ".concat(_), r), n
  }
  async timeAsync(e, _, E) {
    if (!this.isTracing) return E();
    this.mark(e, "Start ".concat(_));
    let t = Date.now(),
      o = await E(),
      n = Date.now() - t;
    return this.mark(e, "Finish ".concat(_), n), o
  }
  setServerTrace(e) {
    this.logGroups[0].serverTrace = e
  }
  constructor() {
    this.isTracing_ = !0, this.endTime_ = Date.now() + 15e3, this.lastImportDuration = 0, this.logGroups = [{
      index: 0,
      timestamp: Date.now(),
      logs: [],
      nativeLogs: []
    }], this.logs = this.logGroups[0].logs, this.prefix = ""
  }
}