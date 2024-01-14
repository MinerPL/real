"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("917351"),
  s = n.n(a),
  i = n("492249"),
  l = n("49111");

function r(e, t) {
  return {
    [l.RPCEvents.VOICE_SETTINGS_UPDATE]: {
      scope: {
        [i.RPC_SCOPE_CONFIG.ANY]: [l.OAuth2Scopes.RPC, l.OAuth2Scopes.RPC_VOICE_READ]
      },
      handler: () => t => {
        let {
          prevState: n,
          dispatch: a
        } = t, i = e();
        return !s.isEqual(i, n) && a(i), i
      }
    },
    [l.RPCEvents.VOICE_SETTINGS_UPDATE_2]: {
      scope: i.RPC_LOCAL_SCOPE,
      handler(e) {
        let {
          socket: n
        } = e;
        return e => {
          let {
            prevState: a,
            dispatch: i
          } = e;
          if (null == n.application.id) return a;
          let l = t(n.application.id);
          return !s.isEqual(l, a) && i(l), l
        }
      }
    }
  }
}