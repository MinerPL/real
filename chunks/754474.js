"use strict";
n.r(t), n.d(t, {
  BotTypes: function() {
    return a.BotTagTypes
  },
  default: function() {
    return o
  }
});
var i = n("37983");
n("884691");
var s = n("414456"),
  l = n.n(s),
  r = n("79798"),
  a = n("988268"),
  u = n("888770"),
  o = e => {
    let {
      name: t,
      discriminator: n,
      invertBotTagColor: s,
      nameColor: a,
      className: o,
      botType: d,
      usernameClass: c,
      discriminatorClass: h,
      botClass: f,
      botVerified: m = !1,
      style: p,
      useRemSizes: I = !1,
      usernameIcon: E
    } = e;
    return (0, i.jsxs)("div", {
      className: l(o, u.nameTag),
      style: p,
      children: [(0, i.jsxs)("span", {
        className: l(u.username, c),
        style: null != a ? {
          color: a
        } : void 0,
        children: [E, t]
      }), null != n ? (0, i.jsxs)("span", {
        className: null != h ? h : void 0,
        children: ["#", n]
      }) : null, null != d ? (0, i.jsx)(r.default, {
        type: d,
        invertColor: s,
        className: l(f, u.bot),
        verified: m,
        useRemSizes: I
      }) : null]
    })
  }