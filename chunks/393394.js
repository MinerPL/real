"use strict";
l.r(t), l.d(t, {
  default: function() {
    return m
  }
});
var u = l("37983"),
  a = l("884691"),
  n = l("446674"),
  r = l("77078"),
  d = l("750560"),
  i = l("64016"),
  s = l("263024"),
  o = l("300322"),
  f = l("42203"),
  c = l("305961"),
  E = l("957255"),
  _ = l("697218"),
  M = l("49111"),
  S = l("782340");

function m(e, t, m) {
  let A = a.useMemo(() => ({
    [t]: [e.id]
  }), [t, e.id]);
  (0, d.useSubscribeGuildMembers)(A), (0, n.useStateFromStores)([E.default], () => E.default.getGuildVersion(t), [t]);
  let g = (0, n.useStateFromStores)([f.default], () => f.default.getChannel(m)),
    R = (0, n.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]),
    C = (0, n.useStateFromStores)([_.default], () => _.default.getCurrentUser()),
    T = (0, i.default)(g, "Context Menu"),
    N = (0, o.useIsThreadModerator)(g);
  if ((null == C ? void 0 : C.id) === e.id) return [T];
  if (null == R || null == g || null == C) return [];
  let I = N || g.ownerId === C.id && g.type === M.ChannelTypes.PRIVATE_THREAD;
  return [I ? (0, u.jsx)(r.MenuItem, {
    id: "remove",
    label: g.isForumPost() ? S.default.Messages.REMOVE_USER_FROM_FORUM_POST.format({
      user: e.username
    }) : S.default.Messages.REMOVE_USER_FROM_THREAD.format({
      user: e.username
    }),
    color: "danger",
    action: () => s.default.removeMember(g, e.id, "Context Menu")
  }) : null, E.default.canManageUser(M.Permissions.KICK_MEMBERS, e, R) ? (0, u.jsx)(r.MenuItem, {
    id: "kick",
    label: I ? S.default.Messages.KICK_USER_FROM_SERVER.format({
      user: e.username
    }) : S.default.Messages.KICK_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => (0, r.openModalLazy)(async () => {
      let {
        default: t
      } = await l.el("125104").then(l.bind(l, "125104"));
      return l => (0, u.jsx)(t, {
        ...l,
        guildId: R.id,
        user: e
      })
    })
  }) : null, E.default.canManageUser(M.Permissions.BAN_MEMBERS, e, R) ? (0, u.jsx)(r.MenuItem, {
    id: "ban",
    label: I ? S.default.Messages.BAN_USER_FROM_SERVER.format({
      user: e.username
    }) : S.default.Messages.BAN_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => (0, r.openModalLazy)(async () => {
      let {
        default: t
      } = await l.el("743506").then(l.bind(l, "743506"));
      return l => (0, u.jsx)(t, {
        ...l,
        guildId: R.id,
        user: e
      })
    })
  }) : null]
}