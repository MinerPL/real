"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("605250"),
  s = n("313915"),
  i = n("856116"),
  l = n("17891"),
  r = n("56245"),
  o = n("958530"),
  u = n("49111");
let d = new a.default("RPCServer:PostMessage"),
  c = (e, t, n) => {
    (s.default.isLoggingOverlayEvents || e.cmd !== u.RPCCommands.OVERLAY) && t.info("Socket Message: ".concat(n.id), (0, i.default)(e))
  };
var E = function() {
  let e = new l.default(r.validateSocketClient, d, o.default, c);
  return window.addEventListener("message", t => {
    if (window === t.source) return;
    if (null == t.source || null == t.source.postMessage) {
      d.error("Unknown event source");
      return
    }
    let n = t.source,
      a = t.data,
      s = t.origin;
    e.handleMessage(a, s, (e, t) => {
      n.postMessage(e, t)
    })
  }), e
}()