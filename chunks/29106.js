"use strict";
l.r(t), l.d(t, {
  default: function() {
    return M
  }
}), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("917351"),
  i = l.n(s),
  r = l("316693"),
  o = l("446674"),
  d = l("77078"),
  u = l("524768"),
  c = l("389153"),
  f = l("26989"),
  m = l("305961"),
  I = l("957255"),
  T = l("555158"),
  N = l("68238"),
  E = l("482391"),
  h = l("683830"),
  g = l("464782"),
  p = l("636024"),
  S = l("829319"),
  O = l("409645"),
  _ = l("157453"),
  A = l("49111"),
  C = l("317041"),
  x = l("782340"),
  R = l("24113");

function M(e) {
  let {
    applicationId: t,
    commandId: s,
    guildId: g,
    inModal: p,
    editedTargetPermissions: M,
    originalApplicationPermissions: j,
    originalCommandPermissions: b,
    selectedPermissionCount: P
  } = e, D = (0, o.useStateFromStores)([h.default], () => null == s ? null : h.default.getCommand(s), [s]), y = (null == D ? void 0 : D.defaultMemberPermissions) != null, G = (0, o.useStateFromStores)([m.default, f.default, I.default], () => {
    let e = m.default.getGuild(g),
      t = f.default.getSelfMember(g);
    return null != e && null != t && (0, c.hasAccess)({
      PermissionStore: I.default,
      guild: e,
      selfMember: t,
      applicationLevelPermissions: j,
      commandLevelPermissions: b,
      defaultMemberPermissions: null == D ? void 0 : D.defaultMemberPermissions
    })
  }, [g, D, j, b]), B = null != s ? s : t, [H, k] = a.useMemo(() => {
    let e = {},
      t = {};
    for (let [l, n] of Object.entries(M)) n.type === u.ApplicationCommandPermissionType.CHANNEL ? e[l] = n : t[l] = n;
    return [e, t]
  }, [M]), U = a.useCallback(e => {
    let t = m.default.getGuild(g),
      l = f.default.getSelfMember(g);
    return null != t && null != l && (null != s ? (0, c.hasAccess)({
      PermissionStore: I.default,
      guild: t,
      selfMember: l,
      applicationLevelPermissions: j,
      commandLevelPermissions: e,
      defaultMemberPermissions: null == D ? void 0 : D.defaultMemberPermissions
    }) : (0, c.hasAccess)({
      PermissionStore: I.default,
      guild: t,
      selfMember: l,
      applicationLevelPermissions: e
    }))
  }, [g, D, s, j]), F = a.useCallback((e, t) => {
    var l, n;
    let a;
    let s = null;
    if (0 !== t.length) {
      let e = t[0],
        n = M[e];
      if (n.type === u.ApplicationCommandPermissionType.USER) a = O.InvalidAction.REMOVE_SELF;
      else {
        let e = n.id;
        if (a = O.InvalidAction.REMOVE_ROLE, e === g) s = "@everyone";
        else {
          let t = null === (l = m.default.getGuild(g)) || void 0 === l ? void 0 : l.getRole(e);
          s = null != t ? t.name : "role"
        }
      }
    } else {
      let t = Object.values(e)[0],
        l = t.id;
      if (a = O.InvalidAction.DENY_ROLE, l === g) s = "@everyone";
      else {
        let e = null === (n = m.default.getGuild(g)) || void 0 === n ? void 0 : n.getRole(l);
        s = null != e ? e.name : "role"
      }
    }(0, O.showApplicationCommandPermissionLockoutModal)(a, s)
  }, [g, M]), w = a.useCallback((e, l) => {
    let n = {};
    for (let [e, t] of Object.entries(M)) n[e] = {
      id: t.id,
      permission: t.permission,
      type: t.type
    };
    n = Object.assign(n, e), l.length > 0 && (n = i.omit(n, l));
    let a = U(n);
    if (!a) {
      F(e, l);
      return
    }
    E.editPermissions(t, B, n)
  }, [t, M, B, U, F]), W = a.useCallback(() => {
    let e = Object.keys(H);
    return (0, d.openModalLazy)(async () => {
      let {
        default: t
      } = await l.el("609789").then(l.bind(l, "609789"));
      return l => (0, n.jsx)(t, {
        editPermissions: w,
        guildId: g,
        headerText: x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_ADD_BUTTON,
        hasMemberSearch: !1,
        overwrittenKeys: e,
        search: v,
        searchPlaceholderText: x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_SEARCH_PLACEHOLDER,
        selectedPermissionCount: P,
        ...l
      })
    })
  }, [w, H, g, P]), V = a.useCallback(() => {
    let e = Object.keys(k);
    return (0, d.openModalLazy)(async () => {
      let {
        default: t
      } = await l.el("609789").then(l.bind(l, "609789"));
      return l => (0, n.jsx)(t, {
        editPermissions: w,
        guildId: g,
        hasMemberSearch: !0,
        headerText: x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD_BUTTON,
        overwrittenKeys: e,
        search: L,
        searchPlaceholderText: x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_SEARCH_PLACEHOLDER,
        selectedPermissionCount: P,
        ...l
      })
    })
  }, [w, g, k, P]), Y = a.useCallback(() => (0, d.openModalLazy)(async () => {
    let {
      default: e
    } = await l.el("317671").then(l.bind(l, "317671")), t = D.defaultMemberPermissions;
    return r.default.equals(t, c.DISABLED_BY_DEFAULT_PERMISSION_FLAG) && (t = A.Permissions.ADMINISTRATOR), l => (0, n.jsx)(e, {
      ...l,
      defaultMemberPermissions: t
    })
  }), [D]), K = P - C.APPLICATION_COMMAND_PERMISSIONS_LIMIT, z = K >= 0, Z = [{
    buttonClick: V,
    buttonText: x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD_BUTTON,
    noneSelectedText: x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_ROLE_MEMBER_NO_ENTRIES,
    overwrites: k,
    title: null == s ? x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD : x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_ROLE_MEMBER_HEADER
  }, {
    buttonClick: W,
    buttonText: x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_ADD_BUTTON,
    noneSelectedText: x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_CHANNEL_NO_ENTRIES,
    overwrites: H,
    title: null == s ? x.default.Messages.CHANNELS : x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_CHANNEL_HEADER
  }];
  return (0, n.jsxs)(a.Fragment, {
    children: [K > 0 ? (0, n.jsx)(T.default, {
      messageType: T.HelpMessageTypes.WARNING,
      children: x.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_NOTICE_TEXT.format({
        removeCount: K
      })
    }) : null, y ? (0, n.jsxs)("div", {
      className: R.requiredPermissionsBanner,
      children: [(0, n.jsx)(N.default, {
        className: R.icon,
        height: 18,
        width: 18
      }), (0, n.jsx)("span", {
        className: R.message,
        children: x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_DEFAULT_MEMBER_PERMISSIONS_SECTION_DESCRIPTION.format()
      }), (0, n.jsx)(d.Button, {
        color: d.Button.Colors.PRIMARY,
        onClick: Y,
        size: d.Button.Sizes.SMALL,
        className: R.addButton,
        children: x.default.Messages.VIEW
      })]
    }) : null, Z.map((e, t) => {
      let l = t => (0, n.jsx)(d.Button, {
          ...t,
          color: d.Button.Colors.PRIMARY,
          disabled: z || !G,
          onClick: e.buttonClick,
          size: d.Button.Sizes.TINY,
          className: R.addButton,
          children: e.buttonText
        }),
        a = null;
      return G ? z && (a = x.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_MAX) : a = null != s ? x.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_COMMAND : x.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_APPLICATION, (0, n.jsx)(_.default, {
        bar: (0, n.jsx)(d.Tooltip, {
          tooltipClassName: R.tooltip,
          text: a,
          shouldShow: null != a,
          children: e => l(e)
        }),
        inModal: p,
        title: e.title,
        children: (0, n.jsx)("div", {
          className: p ? void 0 : R.listContainer,
          children: (0, n.jsx)(S.default, {
            guildId: g,
            commandId: s,
            noneSelectedText: e.noneSelectedText,
            overwrites: e.overwrites,
            editPermissions: w,
            hasAccessToMutatePermissions: G
          })
        })
      }, t)
    })]
  })
}

function v(e) {
  let t = (0, g.useIntegrationPermissionChannelSearch)(e);
  return {
    ...t,
    results: t.results.map(e => ({
      ...e,
      type: u.ApplicationCommandPermissionType.CHANNEL
    }))
  }
}

function L(e) {
  let t = (0, p.useIntegrationPermissionMemberSearch)(e);
  return {
    ...t,
    results: t.results.roles.map(e => ({
      ...e,
      type: u.ApplicationCommandPermissionType.ROLE
    })).concat(t.results.members.map(e => ({
      ...e,
      type: u.ApplicationCommandPermissionType.USER
    })))
  }
}