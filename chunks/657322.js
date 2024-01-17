"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("860677");
var a = n("599110"),
  s = n("843158"),
  i = n("861309"),
  l = n("846678"),
  r = n("842897"),
  o = n("492249"),
  u = n("49111"),
  d = {
    [u.RPCCommands.SUBSCRIBE]: {
      async handler(e) {
        let {
          server: t,
          socket: n,
          evt: d,
          args: c
        } = e, f = t.events[d];
        if (null == f) throw new i.default(o.RPCErrors.INVALID_EVENT, "Invalid event: ".concat(d));
        if (!(0, l.default)(n.authorization.scopes, f.scope)) throw new i.default(o.RPCErrors.INVALID_PERMISSIONS, "Not authenticated or invalid scope");
        s.ExperimentRPCServerAnalyticsKillswitch.getCurrentConfig({
          location: "RPCServer"
        }).enabled && a.default.track(u.AnalyticEvents.RPC_SUBSCRIPTION_REQUESTED, {
          event: d,
          scope: "object" == typeof f.scope ? JSON.stringify(f.scope) : f.scope,
          application_id: n.application.id
        });
        let E = f.handler({
            args: c,
            socket: n
          }),
          _ = await (0, r.getInitialSubscriptionPayload)(n, d, c);
        return new Promise(e => {
          setImmediate(() => {
            t.addSubscription(n, d, c, E), null != _ && t.dispatchToSubscriptions(d, e => e.socket.id === n.id, _)
          }), e({
            evt: d
          })
        })
      }
    },
    [u.RPCCommands.UNSUBSCRIBE]: {
      handler(e) {
        let {
          server: t,
          socket: n,
          evt: a,
          args: s
        } = e;
        if (null == t.events[a]) throw new i.default(o.RPCErrors.INVALID_EVENT, "Invalid event: ".concat(a));
        return t.removeSubscription(n, a, s), {
          evt: a
        }
      }
    }
  }