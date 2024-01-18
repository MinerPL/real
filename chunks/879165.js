"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("917351"),
  i = n.n(s),
  r = n("249654"),
  o = n("446674"),
  u = n("913144"),
  d = n("267363"),
  c = n("152637"),
  f = n("578198"),
  h = n("689275"),
  E = n("967241"),
  m = n("42203"),
  p = n("449008"),
  S = n("648564"),
  g = n("419309");

function N(e) {
  let {
    channel: t,
    channelRecord: n,
    deleteChannel: s
  } = e, N = (0, o.useStateFromStoresArray)([h.default, m.default], () => i(h.default.getThreadsForParent(n.guild_id, n.id)).values().filter(e => {
    let {
      id: n
    } = e;
    return r.default.compare(n, t.oldestReadMessageId) > 0
  }).map(e => {
    let {
      id: t
    } = e;
    return m.default.getChannel(t)
  }).filter(p.isNotNullish).sort((e, t) => r.default.compare(e.id, t.id)).value(), [t.oldestReadMessageId, n.guild_id, n.id]), _ = l.useCallback((e, t) => {
    (0, E.openThreadSidebarForViewing)(e, t, S.OpenThreadAnalyticsLocations.INBOX)
  }, []);
  return l.useEffect(() => {
    null != n && t.isFullyLoaded && !t.hasError && !t.collapsed && 0 === N.length && u.default.wait(() => {
      (0, d.ack)(t.channelId, !0), s(t.channelId)
    })
  }), (0, a.jsx)("div", {
    className: g.container,
    children: N.map(e => (0, a.jsx)(f.ForumPostComposerStoreProvider, {
      createStore: () => (0, f.createForumPostComposerStore)(n),
      children: (0, a.jsx)(c.default, {
        className: g.forumPost,
        threadId: e.id,
        goToThread: _
      })
    }, e.id))
  })
}