"use strict";
n.r(t), n.d(t, {
  overlayEventHandlers: function() {
    return d
  }
});
var a = n("917351"),
  s = n.n(a),
  i = n("686470"),
  l = n("860957"),
  r = n("861309"),
  o = n("492249"),
  u = n("49111");
let d = {
  [u.RPCEvents.OVERLAY_UPDATE]: {
    scope: o.RPC_LOCAL_SCOPE,
    handler(e) {
      let {
        args: {
          pid: t
        },
        socket: n
      } = e;
      if ("number" != typeof t || t < 10) throw new r.default(o.RPCErrors.INVALID_EVENT, "Invalid pid");
      return e => {
        let {
          prevState: a,
          dispatch: r
        } = e, o = l.default.enabled, u = !0, d = n.application.id;
        if (null != d) {
          let e = i.default.getActiveLibraryApplication(d);
          null != e && (o = o && e.isOverlayEnabled()), u = l.default.isInputLocked(t)
        }
        let c = {
          enabled: o,
          locked: u
        };
        return !s.isEqual(c, a) && r(c), c
      }
    }
  }
}