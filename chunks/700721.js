"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var a = n("37983");
n("884691");
var s = n("872717"),
  i = n("862337"),
  l = n("77078"),
  r = n("316718"),
  o = n("84460"),
  u = n("299285"),
  d = n("697218"),
  c = n("437712"),
  f = n("167726"),
  E = n("718517"),
  _ = n("50885"),
  h = n("861309"),
  C = n("492249"),
  I = n("49111");
let T = 10 * E.default.Millis.SECOND;
var S = {
  [I.RPCCommands.VALIDATE_APPLICATION]: {
    scope: C.RPC_LOCAL_SCOPE,
    handler(e) {
      let {
        socket: t
      } = e, s = t.application.id;
      try {
        if (null == s) throw new h.default(C.RPCErrors.INVALID_COMMAND, "No application.");
        let e = u.default.getApplication(s);
        if (null == e) throw new h.default(C.RPCErrors.INVALID_ENTITLEMENT, "SKU does not exist.");
        let t = e.primarySkuId;
        if (null == t) throw new h.default(C.RPCErrors.INVALID_ENTITLEMENT, "SKU does not exist.");
        return Promise.race([(function(e, t) {
          let n = c.default.isEntitledToSku(d.default.getCurrentUser(), e, t);
          return null != n ? Promise.resolve(n) : (0, r.fetchUserEntitlementsForApplication)(t).then(() => !0 === c.default.isEntitledToSku(d.default.getCurrentUser(), e, t))
        })(t, e.id).then(e => {
          if (!e) throw new h.default(C.RPCErrors.INVALID_ENTITLEMENT, "User does not have entitlement.")
        }), (0, i.timeoutPromise)(T).then(() => {
          throw new h.default(C.RPCErrors.INVALID_ENTITLEMENT, "Timed out fetching entitlement.")
        })])
      } catch (e) {
        throw e.code === C.RPCErrors.INVALID_ENTITLEMENT && (_.default.focus(null, !0), (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("43264").then(n.bind(n, "43264"));
          return t => (0, a.jsx)(e, {
            ...t,
            applicationId: s
          })
        })), e
      }
    }
  },
  [I.RPCCommands.GET_ENTITLEMENT_TICKET]: {
    scope: C.RPC_LOCAL_SCOPE,
    handler(e) {
      let {
        socket: t
      } = e, i = t.application.id;
      if (null == i) throw new h.default(C.RPCErrors.INVALID_COMMAND, "No application.");
      return s.default.post({
        url: I.Endpoints.ENTITLEMENT_TICKET(i),
        body: {
          test_mode: f.default.inTestModeForApplication(i) || o.default.inDevModeForApplication(i)
        },
        retries: 3,
        oldFormErrors: !0
      }).then(e => {
        let {
          body: t
        } = e;
        return t
      }).catch(e => {
        throw _.default.focus(null, !0), (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("43264").then(n.bind(n, "43264"));
          return t => (0, a.jsx)(e, {
            ...t,
            applicationId: i
          })
        }), e
      })
    }
  }
}