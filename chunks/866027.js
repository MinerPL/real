"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("77078"),
  i = n("812204"),
  r = n("685665"),
  o = n("574073"),
  u = n("232259"),
  d = n("393414"),
  c = n("304198"),
  f = n("843257"),
  E = n("721629"),
  _ = n("988521"),
  T = n("49111"),
  I = n("724210"),
  m = n("782340"),
  N = n("158404");

function p(e) {
  let {
    username: t
  } = e;
  return (0, s.jsx)("div", {
    className: N.welcomeCardText,
    children: (0, s.jsx)(a.Text, {
      tag: "p",
      className: N.welcomeCardText,
      color: "status-positive-text",
      variant: "heading-xl/medium",
      children: m.default.Messages.ROLE_SUBSCRIPTION_WELCOME_CARD_TEXT.format({
        username: t,
        usernameHook: (e, t) => (0, s.jsx)(a.Text, {
          tag: "span",
          color: "status-positive-text",
          variant: "heading-xxl/extrabold",
          lineClamp: 3,
          children: e
        }, t)
      })
    })
  })
}

function S(e) {
  let {
    guildId: t,
    user: n,
    username: l
  } = e;
  return (0, s.jsxs)("div", {
    className: N.welcomeCard,
    role: "img",
    "aria-label": m.default.Messages.ROLE_SUBSCRIPTION_WELCOME_CARD_ARIA_LABEL.format({
      username: l
    }),
    children: [(0, s.jsx)(_.default, {
      guildId: t,
      user: n,
      className: N.welcomeCardBadge
    }), (0, s.jsx)(p, {
      username: l
    })]
  })
}

function A(e) {
  var t, a;
  let {
    channel: _,
    message: m,
    compact: N
  } = e, p = (0, o.default)(m), A = function(e) {
    let {
      author: t,
      channel: n,
      message: s
    } = e, a = n.guild_id, o = (0, u.useUsernameHook)(s.author, n.id, a)(t), {
      analyticsLocations: c
    } = (0, r.default)(i.default.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE), E = s.roleSubscriptionData, _ = l.useCallback(() => {
      (0, d.transitionTo)(T.Routes.CHANNEL(a, I.StaticChannelRoute.ROLE_SUBSCRIPTIONS), null, null, c), (null == E ? void 0 : E.role_subscription_listing_id) != null && (0, f.trackRoleSubscriptionPurchaseMessageTierClick)(a, n.id, s.id, E.role_subscription_listing_id)
    }, [a, n, s, E, c]);
    return null == E ? null : (0, f.getRoleSubscriptionPurchaseSystemMessageFormattedContent)({
      username: t.nick,
      usernameOnClickHandler: o,
      roleSubscriptionOnClickHandler: _,
      guildId: a,
      roleSubscriptionData: s.roleSubscriptionData
    })
  }({
    channel: _,
    message: m,
    author: p
  }), C = (null === (t = m.roleSubscriptionData) || void 0 === t ? void 0 : t.total_months_subscribed) != null && (null === (a = m.roleSubscriptionData) || void 0 === a ? void 0 : a.total_months_subscribed) <= 1;
  return null == A ? null : (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(c.default, {
      icon: n("127067"),
      timestamp: m.timestamp,
      compact: N,
      children: A
    }), C && (0, s.jsx)(S, {
      guildId: _.guild_id,
      user: m.author,
      username: p.nick
    }), (0, s.jsx)(E.default, {
      channel: _,
      message: m
    })]
  })
}