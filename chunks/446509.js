"use strict";
n.r(t), n.d(t, {
  GuildRow: function() {
    return I
  },
  default: function() {
    return T
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("446674"),
  r = n("819855"),
  o = n("77078"),
  u = n("272030"),
  d = n("54239"),
  c = n("841098"),
  f = n("449918"),
  h = n("239380"),
  p = n("476263"),
  m = n("158998"),
  E = n("713135"),
  C = n("49111"),
  g = n("782340"),
  S = n("568719"),
  _ = n("175321");

function I(e) {
  let {
    guild: t,
    nick: n,
    theme: l,
    onSelect: i,
    onContextMenu: u,
    user: d
  } = e, c = d.hasAvatarForGuild(t.id);
  return (0, a.jsxs)(o.Clickable, {
    focusProps: {
      offset: {
        right: 8
      }
    },
    className: S.listRow,
    onClick: () => i(t.id),
    onContextMenu: e => u(e, t),
    children: [(0, a.jsx)(p.default, {
      tabIndex: -1,
      guild: t,
      showBadge: !0,
      className: s(S.listAvatar, null == t.icon ? _.guildAvatarWithoutIcon : null),
      badgeStrokeColor: (0, f.getColor)((0, r.isThemeDark)(l) ? C.Color.PRIMARY_600 : C.Color.WHITE_500),
      size: p.default.Sizes.MEDIUM,
      active: !0
    }), (0, a.jsxs)("div", {
      className: S.listRowContent,
      children: [(0, a.jsx)("div", {
        className: S.listName,
        children: t.toString()
      }), c || null != n ? (0, a.jsxs)("div", {
        className: _.guildNick,
        children: [c && (0, a.jsx)(o.Avatar, {
          src: d.getAvatarURL(t.id, 16),
          size: o.AvatarSizes.SIZE_16,
          className: _.guildAvatar,
          "aria-hidden": !0
        }), null != n ? n : m.default.getName(d)]
      }) : null]
    })]
  })
}

function T(e) {
  let t, {
      user: l,
      onClose: s
    } = e,
    r = (0, i.useStateFromStores)([E.default], () => E.default.getMutualGuilds(l.id)),
    f = (0, c.default)();

  function p(e) {
    (0, h.transitionToGuild)(e), s(), (0, d.popLayer)()
  }

  function m(e, t) {
    (0, u.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("374705").then(n.bind(n, "374705"));
      return n => (0, a.jsx)(e, {
        ...n,
        guild: t
      })
    })
  }
  return t = null == r || 0 === r.length ? (0, a.jsxs)("div", {
    className: S.empty,
    children: [(0, a.jsx)("div", {
      className: S.emptyIconGuilds
    }), (0, a.jsx)("div", {
      className: S.emptyText,
      children: g.default.Messages.NO_MUTUAL_GUILDS
    })]
  }) : r.map(e => {
    let {
      guild: t,
      nick: n
    } = e;
    return (0, a.jsx)(I, {
      user: l,
      guild: t,
      nick: n,
      theme: f,
      onSelect: p,
      onContextMenu: m
    }, t.id)
  }), (0, a.jsx)(o.ScrollerThin, {
    className: S.listScroller,
    fade: !0,
    children: t
  })
}