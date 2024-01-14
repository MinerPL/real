"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  },
  createFakeGuildFeedItem: function() {
    return s
  }
});
var d = n("611221"),
  i = n("430475"),
  r = n("449008"),
  l = n("2804");

function u(e) {
  switch (e.entityType) {
    case d.GuildFeedItemTypes.FORUM_POST:
      return {
        entityId: e.entity.id, details: {
          parent_channel_id: e.entity.parent_id
        }, entityType: e.entityType, guildId: e.guildId
      };
    case d.GuildFeedItemTypes.MESSAGE:
      return {
        entityId: e.entity.id, details: {
          channel_id: e.entity.channel_id
        }, entityType: e.entityType, guildId: e.guildId
      };
    default:
      (0, r.assertNever)(e)
  }
}

function s(e) {
  switch (e.entityType) {
    case d.GuildFeedItemTypes.FORUM_POST:
      let t = e.entity.id,
        {
          firstMessage: n
        } = i.default.getMessage(t);
      if (null == n) return null;
      return {
        type: d.GuildFeedItemTypes.FORUM_POST, id: (0, l.getGuildFeedItemIdFromFeatureableItem)(e), sortIndex: 0, message: n, thread: e.entity, featured: !0, seen: !1, highlighted: !1, unreadMention: !1
      };
    case d.GuildFeedItemTypes.MESSAGE:
      return {
        type: d.GuildFeedItemTypes.MESSAGE, id: (0, l.getGuildFeedItemIdFromFeatureableItem)(e), sortIndex: 0, message: e.entity, referenceMessages: [], featured: !0, seen: !1, highlighted: !1, unreadMention: !1
      }
  }
}