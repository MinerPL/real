"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("917351"),
  o = n.n(r),
  u = n("316693"),
  d = n("509043"),
  c = n("446674"),
  f = n("77078"),
  h = n("18054"),
  C = n("798609"),
  p = n("679653"),
  m = n("462430"),
  E = n("592407"),
  g = n("367376"),
  S = n("305961"),
  _ = n("957255"),
  A = n("697218"),
  T = n("987772"),
  M = n("155207"),
  I = n("917686"),
  N = n("317134"),
  L = n("991170"),
  v = n("158998"),
  R = n("938244"),
  x = n("172554"),
  y = n("730859"),
  D = n("49111"),
  O = n("782340"),
  j = n("935107");

function b(e) {
  let {
    channel: t
  } = e, [n, l] = a.useState(!1), r = (0, p.default)(t, !0), b = (0, c.useStateFromStores)([S.default], () => S.default.getGuild(t.guild_id)), P = (0, c.useStateFromStores)([A.default], () => A.default.getUser(null == b ? void 0 : b.ownerId)), F = a.useMemo(() => null != b ? o(b.roles).sortBy(e => -e.position).filter(e => e.id !== b.id).value() : [], [b]), U = a.useMemo(() => o(F).filter(e => {
    if (null == b) return !1;
    let n = L.default.computePermissionsForRoles({
      forceRoles: {
        [e.id]: e
      },
      context: t
    });
    return u.default.has(n, D.Permissions.ADMINISTRATOR) || u.default.has(n, D.Permissions.VIEW_CHANNEL)
  }).value(), [t, b, F]), H = (0, c.useStateFromStoresArray)([A.default], () => {
    let e = {};
    for (let n of (null != P && (e[P.id] = P), Object.values(t.permissionOverwrites))) {
      if (n.type !== C.PermissionOverwriteType.MEMBER || null != e[n.id]) continue;
      let t = A.default.getUser(n.id);
      null != t && (e[t.id] = t)
    }
    return o(e).filter(e => {
      var n;
      let s = L.default.can({
          permission: D.Permissions.ADMINISTRATOR,
          user: e,
          context: t
        }),
        a = null !== (n = t.permissionOverwrites[e.id]) && void 0 !== n ? n : L.default.NONE,
        l = u.default.has(a.allow, D.Permissions.VIEW_CHANNEL);
      return s || l
    }).value()
  }, [t, P]), k = _.default.can(D.Permissions.MANAGE_CHANNELS, t) || _.default.can(D.Permissions.MANAGE_ROLES, t);

  function G() {
    h.default.open(t.id)
  }
  let B = a.useCallback(() => l(!1), []);
  return (0, s.jsxs)(x.default, {
    channelId: t.id,
    children: [(0, s.jsx)(x.EmptyMessageIcon, {
      locked: !0,
      channelType: t.type
    }), (0, s.jsx)(x.EmptyMessageHeader, {
      children: O.default.Messages.BEGINNING_CHANNEL_WELCOME.format({
        channelName: r
      })
    }), (0, s.jsx)(x.EmptyMessageBody, {
      children: O.default.Messages.BEGINNING_ROLE_REQUIRED_CHANNEL_DESCRIPTION.format({
        channelName: r,
        topicHook: () => g.default.parseTopic(t.topic, !0, {
          channelId: t.id
        })
      })
    }), k ? (0, s.jsxs)("div", {
      className: j.channelSettingButtons,
      children: [(0, s.jsx)(R.default, {
        label: O.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE,
        onClick: () => l(!0),
        icon: (0, s.jsx)(M.default, {
          width: 16,
          height: 16
        })
      }), (0, s.jsx)(R.default, {
        label: O.default.Messages.EDIT_CHANNEL,
        onClick: G,
        icon: (0, s.jsx)(T.default, {
          width: 16,
          height: 16
        })
      })]
    }) : null, (0, s.jsxs)("div", {
      className: j.members,
      children: [function() {
        if (1 !== H.length || U.length > 0) return (0, s.jsx)(y.default, {
          guildId: t.guild_id,
          className: j.avatars,
          maxUsers: 5,
          users: H
        });
        let e = H[0],
          n = v.default.getName(e);
        return (0, s.jsxs)("div", {
          className: j.avatars,
          children: [(0, s.jsx)(f.Avatar, {
            src: e.getAvatarURL(t.guild_id, 24),
            "aria-label": n,
            size: f.AvatarSizes.SIZE_24
          }), (0, s.jsx)(f.Text, {
            tag: "span",
            className: j.singleUserName,
            variant: "text-md/normal",
            children: n
          }), "\xa0", (0, s.jsx)(f.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-muted",
            children: O.default.Messages.ROLE_REQUIRED_SINGLE_USER_MESSAGE
          })]
        })
      }(), U.map((e, n) => {
        var a, l;
        let r = null !== (l = e.colorString) && void 0 !== l ? l : (0, d.int2hex)(D.DEFAULT_ROLE_COLOR),
          o = (null === (a = e.tags) || void 0 === a ? void 0 : a.guild_connections) !== void 0;
        return k ? (0, s.jsx)(I.default, {
          className: i(j.role, {
            [j.last]: n === U.length - 1
          }),
          roleName: e.name,
          roleColor: r,
          disabled: !k,
          verified: o,
          onClick: () => {
            E.default.open(t.guild_id, D.GuildSettingsSections.MEMBERS), E.default.selectRole(e.id)
          }
        }, e.id) : (0, s.jsx)(N.default, {
          className: i(j.role, {
            [j.last]: n === U.length - 1
          }),
          roleName: e.name,
          roleColor: r,
          verified: o
        }, e.id)
      })]
    }), n ? (0, s.jsx)(f.Modal, {
      renderModal: e => (0, s.jsx)(m.default, {
        ...e,
        onClose: () => (B(), e.onClose()),
        channelId: t.id
      }),
      onCloseRequest: () => l(!1)
    }) : null]
  })
}