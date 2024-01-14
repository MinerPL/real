"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var i = l("37983"),
  a = l("884691"),
  n = l("77078"),
  s = l("315102"),
  r = l("998944"),
  c = l("288914"),
  o = l("721908"),
  d = l("800255");

function u(e) {
  var t, l, u, p, m;
  let {
    application: _,
    className: f,
    childrenClassName: h,
    animatesOnHover: C,
    onClick: g,
    ...I
  } = e, A = s.default.getApplicationIconURL({
    id: _.id,
    icon: _.icon,
    size: 48
  }), E = (0, o.default)({
    application: _
  }), v = null === (t = _.categories) || void 0 === t ? void 0 : t[0], x = (null !== (p = null === (l = _.directory_entry) || void 0 === l ? void 0 : l.guild_count) && void 0 !== p ? p : 0) > 0 || E.length > 0, R = a.useCallback(() => {
    g({
      mutualGuilds: E
    })
  }, [g, E]), T = (0, i.jsx)(r.default, {
    application: _,
    textVariant: "text-xs/normal",
    mutualGuilds: E,
    mutualGuildShownMax: 3,
    guildIconSize: r.GuildIconSize.SMALL,
    compact: !0
  });
  return (0, i.jsxs)(c.default, {
    className: f,
    onClick: R,
    iconSrc: A,
    header: _.name,
    subheader: null != v && (0, i.jsx)(n.Text, {
      tag: "span",
      color: "header-secondary",
      variant: "text-xs/normal",
      children: v.name
    }),
    animatesOnHover: C,
    ...I,
    children: [(null != _.description || null != h) && (0, i.jsx)("div", {
      className: h,
      children: (0, i.jsx)(n.Text, {
        className: d.listingDescription,
        variant: "text-sm/normal",
        lineClamp: 2,
        children: null !== (m = null === (u = _.directory_entry) || void 0 === u ? void 0 : u.short_description) && void 0 !== m ? m : _.description
      })
    }), x && (0, i.jsx)("div", {
      className: d.bottomGuildCountContainer,
      children: T
    })]
  })
}