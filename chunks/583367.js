"use strict";
a.r(t), a.d(t, {
  fetchAppliedGuildBoostsForGuild: function() {
    return d
  },
  fetchGuildBoostSlots: function() {
    return c
  },
  applyToGuild: function() {
    return _
  },
  unapplyFromGuild: function() {
    return E
  },
  cancelGuildBoostSlot: function() {
    return I
  },
  uncancelGuildBoostSlot: function() {
    return f
  }
});
var l = a("872717"),
  i = a("913144"),
  n = a("448993"),
  s = a("783111"),
  r = a("522308"),
  o = a("521012"),
  u = a("49111");
async function d(e) {
  let t = await l.default.get({
      url: u.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
      oldFormErrors: !0
    }),
    a = t.body.map(e => s.default.createFromServer(e));
  return i.default.dispatch({
    type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS",
    guildId: e,
    appliedBoosts: a
  }), a
}
async function c() {
  let e = await l.default.get({
      url: u.Endpoints.USER_GUILD_BOOST_SLOTS,
      oldFormErrors: !0
    }),
    t = e.body.map(e => r.default.createFromServer(e, o.default.getSubscriptionById(e.subscription_id)));
  return i.default.dispatch({
    type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS",
    guildBoostSlots: t
  }), t
}
async function _(e, t) {
  i.default.dispatch({
    type: "GUILD_APPLY_BOOST_START"
  });
  try {
    let a = await l.default.put({
        url: u.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
        body: {
          user_premium_guild_subscription_slot_ids: t
        },
        oldFormErrors: !0
      }),
      n = Array.isArray(a.body) ? a.body.map(s.default.createFromServer) : [s.default.createFromServer(a.body)];
    return i.default.dispatch({
      type: "GUILD_APPLY_BOOST_SUCCESS",
      appliedGuildBoost: n
    }), c(), n
  } catch (t) {
    let e = new n.AppliedGuildBoostError(t);
    throw i.default.dispatch({
      type: "GUILD_APPLY_BOOST_FAIL",
      error: e
    }), e
  }
}
async function E(e, t) {
  i.default.dispatch({
    type: "GUILD_UNAPPLY_BOOST_START"
  });
  try {
    await l.default.delete({
      url: u.Endpoints.APPLIED_GUILD_BOOST(e, t),
      oldFormErrors: !0
    }), c()
  } catch (t) {
    let e = new n.AppliedGuildBoostError(t);
    throw i.default.dispatch({
      type: "GUILD_UNAPPLY_BOOST_FAIL",
      error: e
    }), e
  }
  i.default.dispatch({
    type: "GUILD_UNAPPLY_BOOST_SUCCESS",
    boostId: t
  })
}
async function I(e) {
  let t = await l.default.post({
      url: u.Endpoints.USER_GUILD_BOOST_SLOT_CANCEL(e),
      oldFormErrors: !0
    }),
    a = r.default.createFromServer(t.body, o.default.getSubscriptionById(t.body.subscription_id));
  return i.default.dispatch({
    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
    guildBoostSlot: a
  }), a
}
async function f(e) {
  let t = await l.default.post({
      url: u.Endpoints.USER_GUILD_BOOST_SLOT_UNCANCEL(e),
      oldFormErrors: !0
    }),
    a = r.default.createFromServer(t.body, o.default.getSubscriptionById(t.body.subscription_id));
  return i.default.dispatch({
    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
    guildBoostSlot: a
  }), a
}