"use strict";
t.r(l), t.d(l, {
  default: function() {
    return v
  }
});
var n = t("37983");
t("884691");
var a = t("446674"),
  s = t("77078"),
  r = t("272030"),
  i = t("957255"),
  o = t("530346"),
  c = t("662255"),
  d = t("306160"),
  u = t("49111"),
  f = t("782340"),
  h = t("297298"),
  v = function(e) {
    var l;
    let {
      guild: v,
      user: p,
      onSelect: C
    } = e, M = null !== (l = null == v ? void 0 : v.id) && void 0 !== l ? l : "", I = (0, a.useStateFromStores)([i.default], () => null != v && i.default.canManageUser(u.Permissions.BAN_MEMBERS, p, v), [v, p]);
    return (0, n.jsx)(s.Menu, {
      navId: "member-application-context-menu",
      className: h.contextMenu,
      onClose: r.closeContextMenu,
      "aria-label": f.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: C,
      children: (0, n.jsxs)(s.MenuGroup, {
        children: [I && (0, n.jsx)(s.MenuItem, {
          id: "ban",
          label: f.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_BAN_USER,
          icon: o.default,
          color: "danger",
          action: () => (0, s.openModalLazy)(async () => {
            let {
              default: e
            } = await t.el("743506").then(t.bind(t, "743506"));
            return l => (0, n.jsx)(e, {
              ...l,
              guildId: M,
              user: p
            })
          })
        }, "ban"), (0, n.jsx)(s.MenuItem, {
          id: "copyUserId",
          label: "Copy User ID",
          icon: c.default,
          action: () => (0, d.copy)(p.id)
        }, "copyUserId")]
      })
    })
  }