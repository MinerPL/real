"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
});
var l = a("37983");
a("884691");
var n = a("414456"),
  s = a.n(n),
  i = a("446674"),
  d = a("77078"),
  r = a("957255"),
  u = a("945330"),
  o = a("701909"),
  c = a("620840"),
  f = a("49111"),
  m = a("994428"),
  h = a("782340"),
  E = a("719593"),
  g = a("487577");

function I(e) {
  let {
    children: t,
    onClose: a
  } = e;
  return (0, l.jsxs)("div", {
    className: E.container,
    children: [(0, l.jsx)(d.Clickable, {
      className: E.closeButton,
      onClick: a,
      children: (0, l.jsx)(u.default, {
        className: E.closeIcon
      })
    }), (0, l.jsx)("div", {
      className: E.textContainer,
      children: t
    }), (0, l.jsx)("img", {
      className: E.image,
      src: g,
      alt: ""
    })]
  })
}

function _(e) {
  let {
    onClose: t
  } = e;
  return (0, l.jsxs)(I, {
    onClose: t,
    children: [(0, l.jsx)(d.Heading, {
      style: {
        color: "white"
      },
      variant: "heading-lg/semibold",
      color: "none",
      children: h.default.Messages.GUILD_FEED_NUX_MEMBER_TITLE
    }), (0, l.jsx)(d.Text, {
      className: E.bodySection,
      variant: "text-sm/normal",
      color: "none",
      children: h.default.Messages.GUILD_FEED_NUX_MEMBER_BODY_1
    }), (0, l.jsx)(d.Text, {
      className: E.bodySection,
      variant: "text-sm/normal",
      color: "none",
      children: h.default.Messages.GUILD_FEED_NUX_MEMBER_BODY_2
    }), (0, l.jsx)(d.Anchor, {
      className: s(E.cta, E.ctaLink, (0, d.getButtonStyle)({
        look: d.Button.Looks.LINK,
        color: d.Button.Colors.WHITE
      })),
      href: o.default.getArticleURL(f.HelpdeskArticles.GUILD_HOME),
      children: h.default.Messages.GUILD_FEED_NUX_MEMBER_BODY_3
    })]
  })
}

function x() {
  (0, d.openModalLazy)(async () => {
    let {
      default: e
    } = await a.el("56657").then(a.bind(a, "56657"));
    return t => (0, l.jsx)(e, {
      ...t
    })
  })
}

function v(e) {
  let {
    onClose: t
  } = e;
  return (0, l.jsxs)(I, {
    onClose: t,
    children: [(0, l.jsx)(d.Heading, {
      style: {
        color: "white"
      },
      variant: "heading-lg/semibold",
      color: "none",
      children: h.default.Messages.GUILD_FEED_NUX_MODERATOR_TITLE
    }), (0, l.jsx)(d.Text, {
      className: E.bodySection,
      variant: "text-sm/normal",
      color: "none",
      children: h.default.Messages.GUILD_FEED_NUX_MEMBER_BODY_1
    }), (0, l.jsx)(d.Text, {
      className: E.bodySection,
      variant: "text-sm/normal",
      color: "none",
      children: h.default.Messages.GUILD_FEED_NUX_MEMBER_BODY_2
    }), (0, l.jsx)(d.Button, {
      className: E.cta,
      look: d.Button.Looks.INVERTED,
      color: d.Button.Colors.BRAND,
      onClick: x,
      children: h.default.Messages.GUILD_FEED_NUX_MODERATOR_CTA
    })]
  })
}

function S(e) {
  let {
    guild: t,
    onClose: a
  } = e, n = (0, i.useStateFromStores)([r.default], () => r.default.can(f.Permissions.MANAGE_MESSAGES, t)), s = (0, c.default)(t, a);
  return s ? n ? (0, l.jsx)(v, {
    onClose: () => a(m.ContentDismissActionType.UNKNOWN)
  }) : (0, l.jsx)(_, {
    onClose: () => a(m.ContentDismissActionType.UNKNOWN)
  }) : null
}