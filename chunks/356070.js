"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("424973");
var a = n("37983");
n("884691");
var s = n("917351"),
  l = n.n(s),
  i = n("77078"),
  r = n("86621"),
  o = n("506885"),
  u = n("981601"),
  d = n("479020"),
  c = n("449008"),
  f = n("49111"),
  m = n("683168");
let E = (0, r.default)(e => {
  let {
    member: t,
    empty: n,
    analyticsContext: s,
    guildId: l
  } = e;
  if (n) return (0, a.jsx)("div", {
    className: m.partyMemberEmpty
  });
  if (null == t) return (0, a.jsx)("div", {
    className: m.partyMemberUnknown,
    children: (0, a.jsx)(d.default, {
      className: m.partyMemberUnknownIcon
    })
  });
  let r = {
    location: {
      ...s.location,
      object: f.AnalyticsObjects.AVATAR
    }
  };
  return (0, a.jsx)("div", {
    className: m.partyMemberKnown,
    children: (0, a.jsx)(i.Popout, {
      preload: () => (0, o.default)(t.id, t.getAvatarURL(l, 80), {
        guildId: l
      }),
      renderPopout: e => (0, a.jsx)(u.default, {
        ...e,
        userId: t.id,
        analyticsParams: r
      }),
      position: "left",
      children: e => (0, a.jsx)(i.Avatar, {
        ...e,
        src: t.getAvatarURL(l, 24),
        "aria-label": t.username,
        size: i.AvatarSizes.SIZE_24,
        className: m.partyMember
      })
    })
  })
});
var _ = e => {
  let {
    partySize: t,
    members: n,
    minAvatarsShown: s = 1,
    maxAvatarsShown: i = 2,
    guildId: r
  } = e, {
    unknownSize: o,
    totalSize: u,
    knownSize: d
  } = t;
  if (u < s) return null;
  let f = l(n).filter(c.isNotNullish).take(i).map(e => (0, a.jsx)(E, {
    member: e,
    guildId: r
  }, e.id)).value();
  for (let e = 0; e < o && f.length < i; e++) f.push((0, a.jsx)(E, {
    guildId: r
  }, "unknown-member-".concat(e)));
  let _ = u - d - o;
  for (let e = 0; e < _ && f.length < i; e++) f.push((0, a.jsx)(E, {
    empty: !0,
    guildId: r
  }, "empty-member-".concat(e)));
  let h = Math.max(Math.min(u - f.length, 99), 0);
  if (1 === h) {
    let e = n[i];
    f.push((0, a.jsx)(E, {
      member: e,
      guildId: r
    }, e.id))
  }
  return (0, a.jsx)("div", {
    className: m.wrapper,
    children: (0, a.jsxs)("div", {
      className: m.partyMembers,
      children: [f, h > 1 ? (0, a.jsxs)("div", {
        className: m.partyMemberOverflow,
        children: ["+", h]
      }) : null]
    })
  })
}