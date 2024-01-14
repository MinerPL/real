"use strict";
n.r(t), n.d(t, {
  fetchAppliedGuildBoostsForGuild: function() {
    return c
  },
  fetchGuildBoostSlots: function() {
    return d
  },
  applyToGuild: function() {
    return _
  },
  unapplyFromGuild: function() {
    return E
  },
  cancelGuildBoostSlot: function() {
    return f
  },
  uncancelGuildBoostSlot: function() {
    return T
  }
});
var r = n("872717"),
  u = n("913144"),
  i = n("448993"),
  l = n("783111"),
  a = n("522308"),
  o = n("521012"),
  s = n("49111");
async function c(e) {
  let t = await r.default.get({
      url: s.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
      oldFormErrors: !0
    }),
    n = t.body.map(e => l.default.createFromServer(e));
  return u.default.dispatch({
    type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS",
    guildId: e,
    appliedBoosts: n
  }), n
}
async function d() {
  let e = await r.default.get({
      url: s.Endpoints.USER_GUILD_BOOST_SLOTS,
      oldFormErrors: !0
    }),
    t = e.body.map(e => a.default.createFromServer(e, o.default.getSubscriptionById(e.subscription_id)));
  return u.default.dispatch({
    type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS",
    guildBoostSlots: t
  }), t
}
async function _(e, t) {
  u.default.dispatch({
    type: "GUILD_APPLY_BOOST_START"
  });
  try {
    let n = await r.default.put({
        url: s.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
        body: {
          user_premium_guild_subscription_slot_ids: t
        },
        oldFormErrors: !0
      }),
      i = Array.isArray(n.body) ? n.body.map(l.default.createFromServer) : [l.default.createFromServer(n.body)];
    return u.default.dispatch({
      type: "GUILD_APPLY_BOOST_SUCCESS",
      appliedGuildBoost: i
    }), d(), i
  } catch (t) {
    let e = new i.AppliedGuildBoostError(t);
    throw u.default.dispatch({
      type: "GUILD_APPLY_BOOST_FAIL",
      error: e
    }), e
  }
}
async function E(e, t) {
  u.default.dispatch({
    type: "GUILD_UNAPPLY_BOOST_START"
  });
  try {
    await r.default.delete({
      url: s.Endpoints.APPLIED_GUILD_BOOST(e, t),
      oldFormErrors: !0
    }), d()
  } catch (t) {
    let e = new i.AppliedGuildBoostError(t);
    throw u.default.dispatch({
      type: "GUILD_UNAPPLY_BOOST_FAIL",
      error: e
    }), e
  }
  u.default.dispatch({
    type: "GUILD_UNAPPLY_BOOST_SUCCESS",
    boostId: t
  })
}
async function f(e) {
  let t = await r.default.post({
      url: s.Endpoints.USER_GUILD_BOOST_SLOT_CANCEL(e),
      oldFormErrors: !0
    }),
    n = a.default.createFromServer(t.body, o.default.getSubscriptionById(t.body.subscription_id));
  return u.default.dispatch({
    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
    guildBoostSlot: n
  }), n
}
async function T(e) {
  let t = await r.default.post({
      url: s.Endpoints.USER_GUILD_BOOST_SLOT_UNCANCEL(e),
      oldFormErrors: !0
    }),
    n = a.default.createFromServer(t.body, o.default.getSubscriptionById(t.body.subscription_id));
  return u.default.dispatch({
    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
    guildBoostSlot: n
  }), n
}