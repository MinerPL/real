"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var a, s = n("861309"),
  i = n("614818"),
  l = n("470313"),
  r = n("492249"),
  o = n("49111");
a = class extends l.default {
  send(e) {
    var t;
    null === (t = this.onSendingToRPCClient) || void 0 === t || t.call(this, e, this.id), this.postMessageToRPCClient([i.default.FRAME, e], this.origin)
  }
  close(e, t) {
    !this.closed && this.postClose(this.origin, {
      code: e,
      message: t
    }, this.postMessageToRPCClient), this.closed = !0
  }
  constructor({
    origin: e,
    postMessageToRPCClient: t,
    frameId: n,
    version: a,
    encoding: i,
    logger: l,
    postClose: u,
    onSendingToRPCClient: d
  }) {
    if (super(r.TransportTypes.POST_MESSAGE, a, i), -1 === ["etf", "json"].indexOf(i)) throw new s.default(o.RPCCloseCodes.INVALID_ENCODING, "Invalid Encoding: ".concat(i));
    if ("etf" === i) throw new s.default(o.RPCCloseCodes.INVALID_ENCODING, "Erlpack cannot be used on this client");
    this.origin = e, this.postMessageToRPCClient = t, this.frameId = n, this.logger = l, this.postClose = u, this.onSendingToRPCClient = d, this.closed = !1
  }
}