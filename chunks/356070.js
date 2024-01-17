"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("424973");
var s = n("37983");
n("884691");
var l = n("917351"),
  a = n.n(l),
  i = n("77078"),
  r = n("86621"),
  o = n("506885"),
  u = n("981601"),
  d = n("479020"),
  c = n("449008"),
  f = n("49111"),
  E = n("683168");
let _ = (0, r.default)(e => {
  let {
    member: t,
    empty: n,
    analyticsContext: l,
    guildId: a
  } = e;
  if (n) return (0, s.jsx)("div", {
    className: E.partyMemberEmpty
  });
  if (null == t) return (0, s.jsx)("div", {
    className: E.partyMemberUnknown,
    children: (0, s.jsx)(d.default, {
      className: E.partyMemberUnknownIcon
    })
  });
  let r = {
    location: {
      ...l.location,
      object: f.AnalyticsObjects.AVATAR
    }
  };
  return (0, s.jsx)("div", {
    className: E.partyMemberKnown,
    children: (0, s.jsx)(i.Popout, {
      preload: () => (0, o.default)(t.id, t.getAvatarURL(a, 80), {
        guildId: a
      }),
      renderPopout: e => (0, s.jsx)(u.default, {
        ...e,
        userId: t.id,
        analyticsParams: r
      }),
      position: "left",
      children: e => (0, s.jsx)(i.Avatar, {
        ...e,
        src: t.getAvatarURL(a, 24),
        "aria-label": t.username,
        size: i.AvatarSizes.SIZE_24,
        className: E.partyMember
      })
    })
  })
});
var T = e => {
  let {
    partySize: t,
    members: n,
    minAvatarsShown: l = 1,
    maxAvatarsShown: i = 2,
    guildId: r
  } = e, {
    unknownSize: o,
    totalSize: u,
    knownSize: d
  } = t;
  if (u < l) return null;
  let f = a(n).filter(c.isNotNullish).take(i).map(e => (0, s.jsx)(_, {
    member: e,
    guildId: r
  }, e.id)).value();
  for (let e = 0; e < o && f.length < i; e++) f.push((0, s.jsx)(_, {
    guildId: r
  }, "unknown-member-".concat(e)));
  let T = u - d - o;
  for (let e = 0; e < T && f.length < i; e++) f.push((0, s.jsx)(_, {
    empty: !0,
    guildId: r
  }, "empty-member-".concat(e)));
  let I = Math.max(Math.min(u - f.length, 99), 0);
  if (1 === I) {
    let e = n[i];
    f.push((0, s.jsx)(_, {
      member: e,
      guildId: r
    }, e.id))
  }
  return (0, s.jsx)("div", {
    className: E.wrapper,
    children: (0, s.jsxs)("div", {
      className: E.partyMembers,
      children: [f, I > 1 ? (0, s.jsxs)("div", {
        className: E.partyMemberOverflow,
        children: ["+", I]
      }) : null]
    })
  })
}