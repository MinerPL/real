"use strict";
s.r(t), s.d(t, {
  useScrolledToTop: function() {
    return S
  },
  default: function() {
    return N
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("77078"),
  r = s("272030"),
  o = s("726527"),
  d = s("555158"),
  u = s("433487"),
  c = s("36402"),
  E = s("364222"),
  _ = s("53948"),
  T = s("782340"),
  I = s("925041");

function S() {
  let [e, t] = n.useState(!0);
  return {
    scrolledToTop: e,
    handleScroll: function(e) {
      t(0 === e.currentTarget.scrollTop)
    }
  }
}

function N(e) {
  let {
    guild: t,
    role: S,
    selectedSection: N,
    setSelectedSection: g
  } = e, f = n.useCallback(e => {
    g(e)
  }, [g]), A = (0, l.useStateFromStores)([c.default], () => {
    var e;
    return null === (e = c.default.getRoleMemberCount(t.id)) || void 0 === e ? void 0 : e[S.id]
  }, [S.id, t.id]), L = t.id === S.id, m = (0, E.default)(S);
  n.useEffect(() => {
    L && g(_.GuildSettingsRoleEditSections.PERMISSIONS)
  }, [L, g]);
  let C = (0, o.useHasGuildRoleItems)(t, S);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: I.titleContainer,
      children: [(0, a.jsx)(i.Text, {
        className: I.titleText,
        color: "header-primary",
        variant: "text-md/semibold",
        children: T.default.Messages.ROLE_EDIT_TITLE_WITH_NAME.format({
          roleName: S.name
        })
      }), C ? (0, a.jsx)(i.Clickable, {
        className: I.menu,
        onClick: function(e) {
          (0, r.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await s.el("726527").then(s.bind(s, "726527"));
            return s => (0, a.jsx)(e, {
              ...s,
              guild: t,
              role: S
            })
          })
        },
        "aria-label": T.default.Messages.MORE_OPTIONS,
        children: (0, a.jsx)(u.default, {})
      }) : null]
    }), null != m ? (0, a.jsx)(d.default, {
      messageType: d.HelpMessageTypes.WARNING,
      children: m
    }) : null, (0, a.jsxs)(i.TabBar, {
      className: I.tabBar,
      "aria-label": T.default.Messages.OPTIONS,
      selectedItem: N,
      type: "top",
      look: "brand",
      onItemSelect: f,
      children: [(0, a.jsx)(i.TabBar.Item, {
        className: I.tabBarItem,
        id: _.GuildSettingsRoleEditSections.DISPLAY,
        disabled: L,
        children: T.default.Messages.ROLE_EDIT_TAB_DISPLAY
      }), (0, a.jsx)(i.TabBar.Item, {
        className: I.tabBarItem,
        id: _.GuildSettingsRoleEditSections.PERMISSIONS,
        children: T.default.Messages.ROLE_EDIT_TAB_PERMISSIONS
      }), (0, a.jsx)(i.TabBar.Item, {
        className: I.tabBarItem,
        id: _.GuildSettingsRoleEditSections.VERIFICATIONS,
        disabled: L,
        children: T.default.Messages.ROLE_EDIT_TAB_VERIFICATION
      }), (0, a.jsx)(i.TabBar.Item, {
        className: I.tabBarItem,
        id: _.GuildSettingsRoleEditSections.MEMBERS,
        disabled: L,
        children: L ? T.default.Messages.ROLE_EDIT_TAB_MANAGE_MEMBERS : T.default.Messages.ROLE_EDIT_TAB_MEMBERS_WITH_LIST.format({
          numMembers: String(A)
        })
      })]
    })]
  })
}