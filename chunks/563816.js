"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var i = n("37983"),
  a = n("884691"),
  l = n("627445"),
  r = n.n(l),
  s = n("446674"),
  u = n("77078"),
  o = n("240249"),
  d = n("916565"),
  c = n("355263"),
  E = n("633043"),
  _ = n("823026"),
  I = n("305961"),
  T = n("697218"),
  f = n("317041"),
  S = n("782340"),
  N = n("205735"),
  p = e => {
    let t, {
        commandType: n,
        commandTargetId: l,
        channel: p,
        guildId: h,
        onHeightUpdate: A,
        context: m
      } = e,
      C = (0, s.useStateFromStores)([I.default], () => I.default.getGuild(null != h ? h : p.guild_id)),
      g = (0, s.useStateFromStores)([T.default], () => T.default.getUser(l)),
      G = (0, _.default)({
        user: g,
        guildId: null == C ? void 0 : C.id,
        channel: p,
        context: m
      }),
      {
        commands: O,
        sectionDescriptors: M,
        loading: D
      } = o.useDiscovery(p, {
        commandType: n
      }, {
        limit: f.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
      }),
      {
        sections: U
      } = a.useMemo(() => {
        let e = {};
        return M.forEach(t => {
          e[t.id] = t
        }), {
          sections: e
        }
      }, [M]),
      v = a.useRef(D.current);
    a.useEffect(() => {
      D.current !== v.current && (v.current = D.current, null == A || A())
    }, [D, A]);
    let R = a.useCallback(e => {
      r(null != p, "menu item should not show if channel is null");
      let t = U[e.applicationId],
        n = null != t ? (0, c.getIconComponent)(t) : void 0;
      return (0, i.jsx)(u.MenuItem, {
        id: e.id,
        label: e.displayName,
        showIconFirst: !0,
        icon: () => null != n ? (0, i.jsx)(n, {
          channel: p,
          section: t,
          width: 18,
          height: 18,
          selectable: !1
        }) : null,
        action: () => {
          (0, d.default)({
            command: e,
            optionValues: {},
            context: {
              channel: p,
              guild: C
            },
            commandTargetId: l
          })
        }
      }, e.id)
    }, [p, C, l, U]);
    return D.current ? t = (0, i.jsx)(u.MenuItem, {
      id: "menu-commands-placeholder",
      render: () => (0, i.jsx)(E.default, {}),
      disabled: !0
    }, "menu-commands-placeholder") : (t = 0 === O.length ? (0, i.jsx)(u.MenuItem, {
      id: "menu-commands-empty",
      label: S.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
      disabled: !0
    }, "menu-commands-empty") : O.map(R), null != G && (t = (0, i.jsxs)(i.Fragment, {
      children: [t, (0, i.jsx)(u.MenuSeparator, {}, "separator"), G]
    }))), (0, i.jsx)(u.MenuItem, {
      id: "apps",
      label: S.default.Messages.APPS,
      listClassName: N.list,
      children: t
    })
  }