"use strict";
n.r(t), n.d(t, {
  UsagePill: function() {
    return p
  },
  default: function() {
    return A
  }
});
var s = n("37983");
n("884691");
var a = n("414456"),
  l = n.n(a),
  r = n("77078"),
  i = n("931138"),
  o = n("124969"),
  u = n("486952"),
  d = n("819220"),
  c = n("5487"),
  f = n("579033"),
  E = n("782340"),
  h = n("426601"),
  _ = n("926622");

function m() {
  return (0, s.jsx)(i.default, {
    className: h.verifiedIcon,
    children: (0, s.jsx)("div", {
      className: h.verifiedCheckContainer,
      children: (0, s.jsx)(u.default, {
        className: h.verifiedCheck
      })
    })
  })
}

function g(e) {
  let {
    verified: t,
    text: n
  } = e;
  return t ? (0, s.jsxs)("div", {
    className: h.verifiedNameContainer,
    children: [(0, s.jsx)(m, {}), n]
  }) : (0, s.jsx)(s.Fragment, {
    children: n
  })
}

function p(e) {
  let {
    className: t,
    count: n,
    creator: a,
    verifiedName: r
  } = e;
  return (0, s.jsx)("div", {
    className: l(h.usagePill, t, h.userText),
    children: null != a || null != r ? E.default.Messages.GUILD_TEMPLATE_USAGES_BY_CREATOR2.format({
      usageCount: n,
      creator: null != r ? r : a,
      creatorHook: (e, t) => (0, s.jsx)(g, {
        text: e,
        verified: null != r
      }, t)
    }) : E.default.Messages.GUILD_TEMPLATE_USAGES.format({
      usageCount: n
    })
  })
}

function A(e) {
  var t;
  let {
    guildTemplate: n,
    error: a,
    tall: i,
    pillClassName: u
  } = e;
  if (null != a && "" !== a) return (0, s.jsxs)("div", {
    className: h.container,
    children: [(0, s.jsx)(o.Title, {
      children: E.default.Messages.INVITE_MODAL_ERROR_TITLE
    }), (0, s.jsx)(o.SubTitle, {
      children: a
    })]
  });
  if (n.state === f.GuildTemplateStates.RESOLVING) return (0, s.jsx)("div", {
    className: h.container,
    children: (0, s.jsx)(r.Spinner, {})
  });
  let m = (0, c.default)(n.code).header;
  if (!i) return (0, s.jsxs)("div", {
    className: h.container,
    children: [(0, s.jsx)(o.Title, {
      className: h.title,
      children: m
    }), (0, s.jsx)(o.SubTitle, {
      className: l(h.subtitle, h.userText),
      children: n.name
    })]
  });
  return (0, s.jsxs)("div", {
    className: h.container,
    children: [(0, s.jsx)(o.Title, {
      className: h.title,
      children: m
    }), (0, s.jsx)(o.SubTitle, {
      className: l(h.subtitle, _.marginTop2),
      children: E.default.Messages.GUILD_TEMPLATE_BASED_ON
    }), (0, s.jsx)(o.Title, {
      className: l(h.title, h.userText),
      children: n.name
    }), null != n.description && "" !== n.description && (0, s.jsx)(o.SubTitle, {
      className: l(h.subtitle, h.userText, _.marginTop8),
      children: n.description
    }), (0, s.jsx)(p, {
      className: u,
      count: null !== (t = n.usageCount) && void 0 !== t ? t : 0,
      creator: n.creator.username,
      verifiedName: (0, d.getVerifiedName)(n.code)
    })]
  })
}