"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var s = n("37983"),
  i = n("884691"),
  r = n("316693"),
  a = n("685698"),
  o = n("577776"),
  d = n("945330"),
  u = n("991170"),
  l = n("978970"),
  f = n("782340"),
  _ = n("190148");

function c(e) {
  let {
    application: t,
    permissions: n,
    deniedPermissions: c,
    onPermissionsChange: g,
    guild: m
  } = e, [h, v] = i.useState(u.default.NONE);
  i.useEffect(() => {
    g(!0, n), v(r.default.invert(m.permissions)), g(!1, r.default.invert(m.permissions))
  }, [m, g, n]);
  let E = l.OrderedPermissions.filter(e => r.default.has(n, e)),
    p = E.filter(e => !r.default.has(h, e)).map(e => {
      let t = (0, l.getPermissionName)(e),
        n = !r.default.has(c, e);
      return (0, s.jsx)("li", {
        className: _.permission,
        children: (0, s.jsx)(a.Checkbox, {
          value: n,
          onChange: (t, n) => g(n, e),
          type: a.Checkbox.Types.INVERTED,
          children: (0, s.jsx)(o.Text, {
            variant: "text-md/normal",
            children: t
          })
        })
      }, String(e))
    }),
    y = E.filter(e => r.default.has(h, e)).map(e => {
      let t = (0, l.getPermissionName)(e);
      return (0, s.jsxs)("li", {
        className: _.permission,
        children: [(0, s.jsx)("div", {
          className: _.disabledPermissionIcon,
          children: (0, s.jsx)(d.default, {
            className: _.icon
          })
        }), (0, s.jsx)(o.Text, {
          variant: "text-md/normal",
          children: t
        })]
      }, String(e))
    });
  return (0, s.jsxs)("div", {
    className: _.botPermissions,
    children: [(0, s.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "header-secondary",
      className: _.permissionsLabel,
      children: f.default.Messages.OAUTH2_CONFIRM_BOT_PERMISSIONS.format({
        applicationName: t.name,
        guildName: m.name
      })
    }), (0, s.jsx)("ul", {
      className: _.permissionsList,
      children: p
    }), y.length > 0 ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        className: _.disabledPermissionsLabel,
        children: f.default.Messages.OAUTH2_DISABLED_PERMISSIONS.format({
          applicationName: t.name
        })
      }), (0, s.jsx)("ul", {
        className: _.permissionsList,
        children: y
      })]
    }) : null]
  })
}