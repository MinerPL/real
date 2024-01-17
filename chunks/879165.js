"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("917351"),
  i = n.n(s),
  r = n("249654"),
  o = n("446674"),
  u = n("913144"),
  d = n("267363"),
  c = n("152637"),
  f = n("578198"),
  E = n("689275"),
  h = n("967241"),
  _ = n("42203"),
  S = n("449008"),
  T = n("648564"),
  N = n("419309");

function p(e) {
  let {
    channel: t,
    channelRecord: n,
    deleteChannel: s
  } = e, p = (0, o.useStateFromStoresArray)([E.default, _.default], () => i(E.default.getThreadsForParent(n.guild_id, n.id)).values().filter(e => {
    let {
      id: n
    } = e;
    return r.default.compare(n, t.oldestReadMessageId) > 0
  }).map(e => {
    let {
      id: t
    } = e;
    return _.default.getChannel(t)
  }).filter(S.isNotNullish).sort((e, t) => r.default.compare(e.id, t.id)).value(), [t.oldestReadMessageId, n.guild_id, n.id]), I = a.useCallback((e, t) => {
    (0, h.openThreadSidebarForViewing)(e, t, T.OpenThreadAnalyticsLocations.INBOX)
  }, []);
  return a.useEffect(() => {
    null != n && t.isFullyLoaded && !t.hasError && !t.collapsed && 0 === p.length && u.default.wait(() => {
      (0, d.ack)(t.channelId, !0), s(t.channelId)
    })
  }), (0, l.jsx)("div", {
    className: N.container,
    children: p.map(e => (0, l.jsx)(f.ForumPostComposerStoreProvider, {
      createStore: () => (0, f.createForumPostComposerStore)(n),
      children: (0, l.jsx)(c.default, {
        className: N.forumPost,
        threadId: e.id,
        goToThread: I
      })
    }, e.id))
  })
}