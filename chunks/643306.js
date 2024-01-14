"use strict";
l.r(t), l.d(t, {
  default: function() {
    return j
  }
});
var a = l("37983");
l("884691");
var n = l("414456"),
  r = l.n(n),
  i = l("917351"),
  u = l.n(i),
  s = l("509043"),
  o = l("446674"),
  d = l("77078"),
  c = l("272030"),
  f = l("888503"),
  m = l("206230"),
  h = l("862205"),
  p = l("895026"),
  E = l("506885"),
  v = l("981601"),
  _ = l("42203"),
  x = l("26989"),
  I = l("305961"),
  S = l("697218"),
  g = l("145131"),
  L = l("666897"),
  M = l("826684"),
  C = l("782340"),
  R = l("191213"),
  T = l("632215");
let N = (0, h.createExperiment)({
  kind: "user",
  id: "2021-07_role_popout",
  label: "Role Popout",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Popout",
    config: {
      enabled: !0
    }
  }]
});

function j(e) {
  let {
    roleColor: t,
    roleId: n,
    channelId: i,
    roleName: h,
    guildId: j,
    children: A,
    inlinePreview: U = !1
  } = e, y = (0, o.useStateFromStores)([m.default], () => m.default.roleStyle), P = null != t && 0 !== t && !U, b = P && "dot" === y, F = e => (0, a.jsxs)(L.default, {
    className: r(T.roleMention),
    color: "username" === y && P ? t : null,
    ...e,
    children: [b && (0, a.jsx)(d.RoleDot, {
      color: (0, s.int2hex)(t),
      className: R.roleDot,
      background: !1,
      tooltip: !1
    }), A]
  }), {
    enabled: O
  } = N.getCurrentConfig({
    location: "2ec235_1"
  }, {
    autoTrackExposure: !1
  });
  return !O || U || null == i || null == j || null == n && "@everyone" !== h ? F() : (0, a.jsx)(d.Popout, {
    preload: async () => {
      null != n && await (0, p.requestMembersForRole)(j, n)
    },
    renderPopout: e => {
      let t = _.default.getChannel(i),
        r = I.default.getGuild(j),
        s = x.default.getMembers(r.id),
        o = null == n ? r.roles[r.id] : r.roles[n],
        m = u(s).filter(e => {
          if ("@everyone" === h || e.roles.includes(n)) {
            let t = S.default.getUser(e.userId);
            return null != t
          }
          return !1
        }).sortBy(e => {
          var t;
          let l = S.default.getUser(e.userId);
          return (null != l ? null !== (t = e.nick) && void 0 !== t ? t : l.username : "").toLocaleLowerCase()
        }).map(e => {
          let n = S.default.getUser(e.userId);
          return (0, a.jsx)(d.Popout, {
            preload: () => (0, E.default)(n.id, n.getAvatarURL(t.guild_id, 80), {
              guildId: t.guild_id,
              channelId: t.id
            }),
            renderPopout: l => (0, a.jsx)(v.default, {
              ...l,
              userId: e.userId,
              guildId: r.id,
              channelId: t.id
            }),
            spacing: 14,
            children: (i, u) => {
              let {
                isShown: s
              } = u;
              return (0, a.jsx)(f.default, {
                selected: s,
                colorString: e.colorString,
                colorRoleName: o.name,
                user: n,
                isOwner: e.userId === r.ownerId,
                nick: e.nick,
                premiumSince: null == e.premiumSince ? null : new Date(e.premiumSince),
                channel: t,
                guildId: r.id,
                onContextMenu: e => {
                  (0, c.openContextMenuLazy)(e, async () => {
                    let {
                      default: e
                    } = await l.el("834247").then(l.bind(l, "834247"));
                    return l => (0, a.jsx)(e, {
                      ...l,
                      user: n,
                      guildId: r.id,
                      channel: t,
                      showMediaItems: !0
                    })
                  })
                },
                ...i
              }, e.userId)
            }
          }, n.id)
        }).value();
      return (0, a.jsx)(g.default, {
        className: T.rolePopout,
        ...e,
        children: (0, a.jsxs)(d.Scroller, {
          className: T.roleScroller,
          children: [(0, a.jsx)(M.default, {
            className: T.roleHeader,
            "aria-label": C.default.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
              title: o.name,
              count: m.length
            }),
            children: (0, a.jsxs)("span", {
              "aria-hidden": !0,
              children: [o.name, " — ", m.length]
            })
          }), m]
        })
      })
    },
    position: "right",
    children: F
  })
}