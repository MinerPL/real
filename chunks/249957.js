"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("65597"),
  r = n("77078"),
  o = n("26989"),
  u = n("697218"),
  d = n("763225"),
  c = n("703433"),
  f = n("21363"),
  h = n("608973"),
  p = n("132881"),
  m = n("63893");

function E(e) {
  let {
    userId: t,
    guildId: n
  } = e, l = (0, d.useProfileThemedPanelBackground)(t, n, .8, r.tokens.colors.BACKGROUND_SECONDARY);
  return (0, a.jsxs)("div", {
    className: s(m.header),
    style: {
      backgroundColor: l
    },
    children: [(0, a.jsx)("div", {
      className: s(m.headerTitle),
      children: (0, a.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        children: "Mod View"
      })
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(r.KeyCombo, {
        shortcut: "esc",
        keyClassName: m.keyComboInner,
        className: m.keyComboContainer
      })
    })]
  })
}

function C(e) {
  let {
    userId: t,
    guildId: n,
    location: l,
    className: r,
    onNavigate: C
  } = e, g = (0, i.default)([u.default], () => u.default.getUser(t), [t]), S = (0, i.default)([o.default], () => o.default.getMember(n, t), [n, t]), _ = (0, d.useProfileThemedPanelBackground)(t, n);
  return null == g || null == S ? null : (0, a.jsxs)("div", {
    className: s(m.container, r),
    style: {
      backgroundColor: _
    },
    children: [(0, a.jsx)(E, {
      userId: t,
      guildId: n
    }), (0, a.jsxs)("div", {
      className: s(m.innerContainer),
      children: [(0, a.jsx)(h.default, {
        member: S
      }), (0, a.jsx)(p.default, {
        userId: t,
        guildId: n,
        onNavigate: C
      }), (0, a.jsx)(f.default, {
        member: S
      }), (0, a.jsx)(c.default, {
        member: S
      })]
    })]
  })
}