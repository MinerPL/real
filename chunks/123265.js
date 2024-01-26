"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("222007"), n("424973"), n("70102");
var i, s = n("446674"),
  r = n("605250"),
  a = n("313915"),
  o = n("509065"),
  l = n("41642"),
  u = n("342797");
let d = new r.default("GatewaySocket"),
  c = new Set(["READY", "INITIAL_GUILD"]),
  f = new Set(["READY", "READY_SUPPLEMENTAL", "RESUMED"]);
i = class {
  isEmpty() {
    return 0 === this.queue.length
  }
  processFirstQueuedDispatch(e) {
    if (this.isEmpty()) return !1;
    let t = [];
    for (; this.queue.length > 0 && e.has(this.queue[0].type);) t.push(this.queue.shift());
    return this.dispatchMultiple(t), !0
  }
  unpauseDispatchQueue() {
    this.paused = !1, this.flush()
  }
  receiveDispatch(e, t, n) {
    this.queue.push({
      data: e,
      type: t,
      compressionAnalytics: n
    }), !this.paused && (c.has(t) ? (null != this.dispatchTimeout && clearTimeout(this.dispatchTimeout), this.flush()) : null == this.dispatchTimeout && (this.dispatchTimeout = setTimeout(this.flush, this.nextDispatchTimeout)))
  }
  dispatchMultiple(e) {
    if (null == this.dispatchSocketMessage) throw Error("setDispatchSocketMessageFunction needs to be called first!");
    let t = "none",
      n = !1;
    try {
      this.socket.connectionState === l.default.RESUMING && s.default.Emitter.pause(150), s.default.Emitter.batched(() => {
        e.forEach(e => {
          t = e.type, n = n || f.has(e.type), this.dispatchOne(e)
        }), o.default.flush()
      }), n && s.default.Emitter.resume()
    } catch (e) {
      this.socket.resetSocketOnError(e, t)
    }
  }
  dispatchOne(e) {
    let {
      data: t,
      type: n,
      compressionAnalytics: i
    } = e, s = performance.now();
    if (this.socket.connectionState === l.default.RESUMING) {
      let e = s - this.resumeAnalytics.lastUpdateTime;
      0 === this.resumeAnalytics.numEvents ? this.resumeAnalytics.initialWaitTime = e : e > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = e), this.resumeAnalytics.totalWaitTime += e, this.resumeAnalytics.lastUpdateTime = s, this.resumeAnalytics.numEvents += 1
    }
    if (a.default.isLoggingGatewayEvents && d.verbose("<~", n, t), "READY" === n) {
      let e = (0, u.getReadyPayloadByteSizeAnalytics)(t);
      this.dispatchSocketMessage(n, t), (0, u.logReadyPayloadReceived)(this.socket, t, s, i, e)
    } else "RESUMED" === n ? (this.dispatchSocketMessage(n, t), (0, u.logResumeAnalytics)(this.resumeAnalytics), this.resumeAnalytics = (0, u.createResumeAnalytics)(), this.socket.handleResumeDispatched()) : this.dispatchSocketMessage(n, t);
    this.socket.connectionState === l.default.RESUMING && (this.resumeAnalytics.dispatchTime += performance.now() - s)
  }
  clear() {
    this.paused = !1, this.queue.length = 0
  }
  constructor(e) {
    this.socket = e, this.queue = [], this.dispatchTimeout = null, this.nextDispatchTimeout = 33, this.paused = !0, this.resumeAnalytics = (0, u.createResumeAnalytics)(), this.dispatchSocketMessage = null, this.flush = () => {
      if (this.paused) return;
      clearTimeout(this.dispatchTimeout), this.dispatchTimeout = null;
      let e = Date.now(),
        t = this.queue.slice();
      this.queue.length = 0, this.dispatchMultiple(t);
      let n = Date.now() - e;
      n > 100 ? (d.log("Dispatched ".concat(t.length, " messages in ").concat(n, "ms")), this.nextDispatchTimeout = 250) : this.nextDispatchTimeout = 33
    }
  }
}