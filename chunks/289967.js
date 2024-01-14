"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983");
n("884691");
var s = n("65597"),
  l = n("77078"),
  i = n("206230"),
  r = n("574073"),
  o = n("232259"),
  u = n("393414"),
  d = n("304198"),
  c = n("790369"),
  f = n("49111"),
  m = n("782340"),
  E = n("910444");

function _(e) {
  let {
    guildId: t,
    user: n,
    username: r
  } = e, o = (0, s.default)([i.default], () => !i.default.useReducedMotion), u = n.getAvatarURL(t, 56, o), d = (0, a.jsx)("img", {
    src: u,
    className: E.userAvatar,
    alt: ""
  });
  return (0, a.jsxs)("div", {
    className: E.thankYouCard,
    role: "img",
    "aria-label": m.default.Messages.ROLE_SUBSCRIPTION_WELCOME_CARD_ARIA_LABEL.format({
      username: r
    }),
    children: [(0, a.jsx)(c.default, {
      avatar: d
    }), (0, a.jsx)(l.Text, {
      className: E.thankYouText,
      tag: "p",
      color: "status-positive-text",
      variant: "heading-xl/medium",
      children: m.default.Messages.GUILD_PRODUCT_PURCHASE_THANK_YOU_CARD_TEXT.format({
        username: r,
        usernameHook: (e, t) => (0, a.jsx)(l.Text, {
          tag: "span",
          color: "status-positive-text",
          variant: "heading-xxl/extrabold",
          lineClamp: 3,
          children: e
        }, t)
      })
    })]
  })
}

function h(e) {
  var t, s, l;
  let {
    channel: i,
    message: c,
    compact: E
  } = e, h = (0, r.default)(c), p = (0, o.useUsernameHook)(c.author, i.id, i.guild_id)(h), I = m.default.Messages.SYSTEM_MESSAGE_GUILD_PRODUCT_PURCHASE.format({
    username: h.nick,
    usernameHook: p,
    productName: null !== (l = null === (s = c.purchaseNotification) || void 0 === s ? void 0 : null === (t = s.guild_product_purchase) || void 0 === t ? void 0 : t.product_name) && void 0 !== l ? l : "",
    handleProductListingClick: () => {
      var e, t, n;
      (0, u.transitionTo)(f.Routes.GUILD_PRODUCT(i.guild_id, null !== (n = null === (t = c.purchaseNotification) || void 0 === t ? void 0 : null === (e = t.guild_product_purchase) || void 0 === e ? void 0 : e.listing_id) && void 0 !== n ? n : ""))
    }
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(d.default, {
      icon: n("127067"),
      timestamp: c.timestamp,
      compact: E,
      children: I
    }), (0, a.jsx)(_, {
      username: h.nick,
      guildId: i.guild_id,
      user: c.author
    })]
  })
}