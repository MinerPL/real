"use strict";
s.r(t), s.d(t, {
  getRiskyPerms: function() {
    return S
  },
  default: function() {
    return N
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("316693"),
  r = s("77078"),
  o = s("957255"),
  d = s("578706"),
  u = s("423487"),
  c = s("991170"),
  E = s("695838"),
  _ = s("69741"),
  T = s("782340"),
  I = s("642622");

function S(e) {
  return _.MODERATOR_PERMISSIONS.filter(t => (null == e ? void 0 : e.id) !== E.FAVORITES_RAW_GUILD_ID && c.default.canEveryone(t, e))
}

function N(e) {
  let {
    guild: t
  } = e, n = t.roles[t.id], c = S(t), E = c.length > 0, N = _.MODERATOR_PERMISSIONS.some(e => !o.default.can(e, t, null, {
    [n.id]: {
      ...n,
      permissions: i.default.remove(n.permissions, e)
    }
  })), g = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: I.itemContent,
      children: [(0, a.jsx)(r.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: T.default.Messages.GUILD_SETTINGS_SAFETY_EVERYONE_RISKY_PERMISSIONS
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: T.default.Messages.GUILD_SETTINGS_SAFETY_EVERYONE_RISKY_PERMISSIONS_DETAILS.format({
          numPerms: c.length
        })
      })]
    }), E ? (0, a.jsx)(u.default, {
      height: 24,
      width: 24,
      className: I.warning,
      "aria-label": T.default.Messages.SAFETY_REMOVE_RISKY_PERMS_ARIA_LABEL
    }) : (0, a.jsx)(d.default, {
      height: 24,
      width: 24,
      className: I.check,
      "aria-label": T.default.Messages.SAFETY_REMOVE_RISKY_PERMS_ARIA_LABEL_COMPLETE
    })]
  });
  return E ? N ? (0, a.jsx)(r.Tooltip, {
    text: T.default.Messages.SAFETY_REMOVE_RISKY_PERMS_WARNING,
    children: e => (0, a.jsx)("div", {
      className: l(I.simpleItemWrapper, I.disabled),
      ...e,
      children: g
    })
  }) : (0, a.jsx)(r.Clickable, {
    onClick: () => {
      (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("343600").then(s.bind(s, "343600"));
        return s => (0, a.jsx)(e, {
          guild: t,
          ...s
        })
      })
    },
    className: l(I.simpleItemWrapper, I.clickable),
    children: g
  }) : (0, a.jsx)("div", {
    className: I.simpleItemWrapper,
    children: g
  })
}