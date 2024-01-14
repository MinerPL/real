"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  i = n.n(s),
  l = n("77078"),
  r = n("945330"),
  o = n("549586"),
  u = n("564875"),
  d = n("368874"),
  c = n("589333"),
  E = n("782340"),
  f = n("635577"),
  _ = n("926622");
let h = e => {
  let {
    header: t,
    description: n,
    icon: s,
    inModal: r
  } = e;
  return (0, a.jsxs)("div", {
    className: i(f.row, _.marginBottom8, {
      [f.inModal]: r
    }),
    children: [(0, a.jsx)("div", {
      className: f.iconContainer,
      children: s
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(l.Text, {
        className: f.header,
        variant: "text-sm/bold",
        color: "header-primary",
        children: t
      }), (0, a.jsx)(l.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: n
      })]
    })]
  })
};
var C = e => {
  let {
    inModal: t
  } = e, n = (0, d.useAgeSpecificText)(E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_INCLUDED_HEADER_TEEN, E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_INCLUDED_HEADER_PARENT), s = (0, d.useAgeSpecificText)(E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_HEADER_TEEN, E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_HEADER_PARENT), i = (0, d.useAgeSpecificText)(E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_HEADER_TEEN, E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_HEADER_PARENT), _ = (0, d.useAgeSpecificText)(E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_DESCRIPTION_TEEN, E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_EXCLUDED_CONTENT_DESCRIPTION_PARENT);
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(l.Text, {
      className: f.groupHeader,
      variant: "text-xxs/bold",
      color: "header-secondary",
      children: n
    }), (0, a.jsx)(h, {
      header: E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_FRIEND_ADD_HEADER,
      description: E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_FRIEND_ADD_DESCRIPTION,
      icon: (0, a.jsx)(u.default, {
        width: 20,
        height: 20,
        color: l.tokens.colors.WHITE.css
      }),
      inModal: t
    }), (0, a.jsx)(h, {
      header: E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_GUILD_PARTICIPATION_HEADER,
      description: E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_GUILD_PARTICIPATION_DESCRIPTION,
      icon: (0, a.jsx)(o.default, {
        width: 20,
        height: 20,
        color: l.tokens.colors.WHITE.css
      }),
      inModal: t
    }), (0, a.jsx)(h, {
      header: E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_USERS_MESSAGED_HEADER,
      description: E.default.Messages.FAMILY_CENTER_DATA_CONFIRMATION_USERS_MESSAGED_DESCRIPTION,
      icon: (0, a.jsx)(c.default, {
        width: 20,
        height: 20,
        color: l.tokens.colors.WHITE.css
      }),
      inModal: t
    }), (0, a.jsx)(l.Text, {
      className: f.groupHeader,
      variant: "text-xxs/bold",
      color: "header-secondary",
      children: s
    }), (0, a.jsx)(h, {
      header: i,
      description: _,
      icon: (0, a.jsx)(r.default, {
        width: 20,
        height: 20,
        color: l.tokens.colors.WHITE.css
      }),
      inModal: t
    })]
  })
}