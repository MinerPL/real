"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("446674"),
  r = n("77078"),
  u = n("102985"),
  o = n("79798"),
  d = n("754474"),
  c = n("158998"),
  E = n("782340"),
  f = n("892802");

function _(e) {
  if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
  if (e.isClyde()) return d.BotTypes.AI;
  if (e.bot) return d.BotTypes.BOT;
  return null
}
let I = e => {
  let {
    primary: t,
    secondary: n,
    botType: a,
    botVerified: i,
    discriminatorClass: u,
    className: d,
    usernameClass: c,
    color: _,
    botClass: I,
    showStreamerModeTooltip: h
  } = e;
  return (0, l.jsxs)("div", {
    className: s(f.info, d),
    children: [(0, l.jsx)(r.Tooltip, {
      text: E.default.Messages.STREAMER_MODE_ENABLED,
      shouldShow: h,
      children: e => (0, l.jsx)("span", {
        ...e,
        className: s(f.username, c),
        style: null != _ ? {
          color: _
        } : void 0,
        children: t
      })
    }), null != n ? (0, l.jsx)("span", {
      className: s(f.infoSpacing, u),
      children: n
    }) : void 0, null != a && (0, l.jsx)(o.default, {
      type: a,
      className: s(f.infoSpacing, I),
      verified: i
    })]
  })
};
var h = e => {
  let {
    hideDiscriminator: t = !1,
    user: n,
    nick: a,
    forceUsername: s,
    showAccountIdentifier: r,
    overrideDiscriminator: o,
    forcePomelo: E,
    ...f
  } = e, h = (0, i.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), T = h || t || n.isNonUserBot(), N = n.toString(), v = c.default.getName(n), m = s ? N : null != a ? a : v, S = n.isPomelo() || E;
  if (S || m !== N) {
    let e = m === N && S && s ? c.default.getUserTag(n, {
        forcePomelo: E
      }) : m,
      t = r && e !== "@".concat(N) ? c.default.getUserTag(n) : void 0;
    return (0, l.jsx)(I, {
      primary: e,
      secondary: t,
      botVerified: n.isVerifiedBot(),
      botType: _(n),
      showStreamerModeTooltip: h && e !== v,
      ...f
    })
  }
  return (0, l.jsx)(d.default, {
    name: m,
    botType: _(n),
    botVerified: n.isVerifiedBot(),
    discriminator: T || m !== N ? null : null != o ? o : n.discriminator,
    ...f
  })
}