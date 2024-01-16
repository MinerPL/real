"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var i = n("37983");
n("884691");
var s = n("414456"),
  l = n.n(s),
  r = n("446674"),
  a = n("77078"),
  u = n("102985"),
  o = n("79798"),
  d = n("754474"),
  c = n("158998"),
  h = n("782340"),
  f = n("892802");

function m(e) {
  if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
  if (e.isClyde()) return d.BotTypes.AI;
  if (e.bot) return d.BotTypes.BOT;
  return null
}
let p = e => {
  let {
    primary: t,
    secondary: n,
    botType: s,
    botVerified: r,
    discriminatorClass: u,
    className: d,
    usernameClass: c,
    color: m,
    botClass: p,
    showStreamerModeTooltip: I
  } = e;
  return (0, i.jsxs)("div", {
    className: l(f.info, d),
    children: [(0, i.jsx)(a.Tooltip, {
      text: h.default.Messages.STREAMER_MODE_ENABLED,
      shouldShow: I,
      children: e => (0, i.jsx)("span", {
        ...e,
        className: l(f.username, c),
        style: null != m ? {
          color: m
        } : void 0,
        children: t
      })
    }), null != n ? (0, i.jsx)("span", {
      className: l(f.infoSpacing, u),
      children: n
    }) : void 0, null != s && (0, i.jsx)(o.default, {
      type: s,
      className: l(f.infoSpacing, p),
      verified: r
    })]
  })
};
var I = e => {
  let {
    hideDiscriminator: t = !1,
    user: n,
    nick: s,
    forceUsername: l,
    showAccountIdentifier: a,
    overrideDiscriminator: o,
    forcePomelo: h,
    ...f
  } = e, I = (0, r.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), E = I || t || n.isNonUserBot(), v = n.toString(), _ = c.default.getName(n), g = l ? v : null != s ? s : _, S = n.isPomelo() || h;
  if (S || g !== v) {
    let e = g === v && S && l ? c.default.getUserTag(n, {
        forcePomelo: h
      }) : g,
      t = a && e !== "@".concat(v) ? c.default.getUserTag(n) : void 0;
    return (0, i.jsx)(p, {
      primary: e,
      secondary: t,
      botVerified: n.isVerifiedBot(),
      botType: m(n),
      showStreamerModeTooltip: I && e !== _,
      ...f
    })
  }
  return (0, i.jsx)(d.default, {
    name: g,
    botType: m(n),
    botVerified: n.isVerifiedBot(),
    discriminator: E || g !== v ? null : null != o ? o : n.discriminator,
    ...f
  })
}