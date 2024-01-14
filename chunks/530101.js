"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983"),
  l = n("884691"),
  i = n("611221"),
  u = n("446674"),
  r = n("77078"),
  s = n("185014"),
  d = n("886484"),
  o = n("300322"),
  f = n("549990"),
  c = n("782340");

function _(e, t) {
  let _ = e.guild_id,
    E = l.useMemo(() => ({
      guildId: _,
      entity: e,
      entityType: i.GuildFeedItemTypes.FORUM_POST
    }), [_, e]),
    T = (0, u.useStateFromStores)([s.default], () => s.default.getIsItemFeatured(E), [E]),
    S = (0, o.useIsThreadModerator)(e),
    h = (0, f.useCanGuildFeedFeatureChannel)(e);
  return S && h ? T ? (0, a.jsx)(r.MenuItem, {
    id: "guild-feed-unfeature",
    label: c.default.Messages.GUILD_FEED_UNFEATURE_FORUM_POST,
    action: () => (0, r.openModalLazy)(async () => {
      let {
        UnfeatureItemConfirmationModal: e
      } = await n.el("969715").then(n.bind(n, "969715"));
      return t => (0, a.jsx)(e, {
        featureableItem: E,
        header: c.default.Messages.GUILD_FEED_UNFEATURE_FORUM_POST_MODAL_HEADER,
        body: c.default.Messages.GUILD_FEED_UNFEATURED_FORUM_POST_MODAL_BODY,
        ...t
      })
    })
  }) : (0, a.jsx)(r.MenuItem, {
    id: "guild-feed-feature",
    label: c.default.Messages.GUILD_FEED_FEATURE_FORUM_POST,
    children: (0, d.getFeatureItemsTimes)().map(l => {
      let {
        value: i,
        timePeriod: u
      } = l;
      return (0, a.jsx)(r.MenuItem, {
        id: "".concat(i),
        label: (0, d.createFeatureItemsTimeLabel)(u),
        action: () => (0, r.openModalLazy)(async () => {
          let {
            FeatureForumPostConfirmationModal: l
          } = await n.el("969715").then(n.bind(n, "969715"));
          return n => (0, a.jsx)(l, {
            thread: e,
            guildId: _,
            expiresSeconds: i,
            timePeriod: u,
            options: t,
            ...n
          })
        })
      }, i)
    })
  }) : null
}