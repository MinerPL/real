"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007"), n("424973");
var a = n("316718"),
  s = n("465527"),
  i = n("55620"),
  l = n("84460"),
  r = n("524503"),
  o = n("167726"),
  u = n("861309"),
  d = n("383928"),
  c = n("492249"),
  f = n("49111");
async function E(e, t) {
  let n = t.filter(e => e.type === f.SKUTypes.SUBSCRIPTION_GROUP),
    a = await Promise.all(n.map(async t => await (0, r.fetchAllSubscriptionListingsDataForApplication)(e, t.id))),
    s = [];
  return a.forEach(e => {
    if (null == e) return null;
    let n = e.subscription_listings;
    if (null == n) return null;
    let a = [];
    n.forEach(e => {
      e.subscription_plans.forEach(n => {
        var s;
        let i = null == n ? void 0 : n.price,
          l = t.find(e => e.id === n.sku_id);
        if (null == l) return;
        let r = {
          id: n.sku_id,
          name: l.name,
          type: l.type,
          price: {
            amount: i,
            currency: f.CurrencyCodes.USD
          },
          application_id: e.application_id,
          flags: e.sku_flags,
          release_date: null !== (s = l.release_date) && void 0 !== s ? s : null
        };
        a.push(r)
      })
    }), a.filter(e => (null == e ? void 0 : e.price) != null).forEach(e => s.push(e))
  }), s
}
async function _(e) {
  let {
    socket: t
  } = e;
  (0, d.validateTransportType)(t.transport);
  let n = t.application.id;
  if (null == n) throw new u.default(c.RPCErrors.INVALID_COMMAND, "No application.");
  if (o.default.inTestModeForApplication(n) || l.default.inDevModeForApplication(n)) {
    let e = await s.fetchSKUsForApplication(n, !1),
      t = await E(n, e);
    return [...e.filter(e => null != e.price), ...t]
  }
  let a = await i.fetchAllStoreListingsForApplication(n),
    r = a.filter(e => e.sku.type !== f.SKUTypes.SUBSCRIPTION_GROUP).map(e => e.sku).filter(e => null != e.price),
    _ = await E(n, a.map(e => e.sku));
  return [...r, ..._]
}

function h(e) {
  let {
    socket: t
  } = e;
  (0, d.validateTransportType)(t.transport);
  let n = t.application.id;
  if (null == n) throw new u.default(c.RPCErrors.INVALID_COMMAND, "No application.");
  return a.fetchUserEntitlementsForApplication(n)
}
var C = {
  [f.RPCCommands.GET_SKUS]: {
    [c.RPC_SCOPE_CONFIG.ANY]: [c.RPC_AUTHENTICATED_SCOPE, c.RPC_LOCAL_SCOPE],
    handler: _
  },
  [f.RPCCommands.GET_ENTITLEMENTS]: {
    [c.RPC_SCOPE_CONFIG.ANY]: [c.RPC_AUTHENTICATED_SCOPE, c.RPC_LOCAL_SCOPE],
    handler: h
  },
  [f.RPCCommands.GET_SKUS_EMBEDDED]: {
    [c.RPC_SCOPE_CONFIG.ANY]: [c.RPC_AUTHENTICATED_SCOPE, c.RPC_LOCAL_SCOPE],
    handler: async e => ({
      skus: await _(e)
    })
  },
  [f.RPCCommands.GET_ENTITLEMENTS_EMBEDDED]: {
    [c.RPC_SCOPE_CONFIG.ANY]: [c.RPC_AUTHENTICATED_SCOPE, c.RPC_LOCAL_SCOPE],
    handler: async e => ({
      entitlements: await h(e)
    })
  }
}