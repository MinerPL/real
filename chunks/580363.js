"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("702976"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var s = n("37983");
n("884691");
var i = n("414456"),
  r = n.n(i),
  a = n("577776"),
  o = n("841811"),
  d = n("338835"),
  u = n("83900"),
  l = n("45029"),
  f = n("71216"),
  _ = n("148337"),
  c = n("568734"),
  g = n("299039"),
  m = n("955145"),
  h = n("29479"),
  v = n("49111"),
  E = n("843455"),
  p = n("782340"),
  y = n("413973");

function T(e) {
  var t;
  let n, {
      application: i,
      scopes: r,
      redirectUri: a,
      approximateGuildCount: T,
      isEmbeddedFlow: S,
      embeddedActivityConfig: I
    } = e,
    A = new Date(g.default.extractTimestamp(i.id)),
    D = (0, h.getSecurityMessage)(r),
    N = (0, c.hasFlag)(null !== (t = i.flags) && void 0 !== t ? t : 0, v.ApplicationFlags.EMBEDDED);
  if (null != a && !N && !S) {
    let e = new URL(a);
    n = null != e.host && e.host.length > 0 ? e.origin : e.href
  }
  return (0, s.jsxs)("div", {
    className: y.applicationDetails,
    children: [null != n ? (0, s.jsx)(C, {
      className: y.redirectWarning,
      icon: u.default,
      text: p.default.Messages.OAUTH2_DETAILS_REDIRECT.format({
        origin: n
      })
    }) : null, (0, s.jsx)(C, {
      icon: l.default,
      text: (0, m.getApplicationDetailsText)(i)
    }), (0, s.jsx)(C, {
      icon: o.default,
      text: p.default.Messages.OAUTH2_DETAILS_CREATION_DATE.format({
        date: A
      })
    }), r.includes(E.OAuth2Scopes.BOT) && null != T ? (0, s.jsx)(C, {
      icon: f.default,
      text: p.default.Messages.OAUTH2_DETAILS_GUILDS.format({
        guildCount: T
      })
    }) : null, (0, s.jsx)(C, {
      icon: _.default,
      text: D
    }), (null == I ? void 0 : I.has_csp_exception) ? (0, s.jsx)(C, {
      icon: d.default,
      text: p.default.Messages.OAUTH2_SCOPES_IP_LOCATION_SCOPE
    }) : null]
  })
}

function C(e) {
  let {
    icon: t,
    text: n,
    className: i
  } = e;
  return (0, s.jsxs)("div", {
    className: r(y.entry, i),
    children: [(0, s.jsx)(t, {
      className: y.entryIcon
    }), (0, s.jsx)(a.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      className: y.entryInner,
      children: n
    })]
  })
}