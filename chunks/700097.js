"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
});
var s = n("933805"),
  l = n("409129"),
  a = n("277683"),
  i = n("843257"),
  r = n("692038"),
  o = n("574073"),
  u = n("950576"),
  d = n("719926"),
  c = n("271938"),
  f = n("42203"),
  E = n("305961"),
  _ = n("697218"),
  T = n("387111"),
  I = n("299039"),
  m = n("49111"),
  N = n("782340");
let p = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    "512412940897484800": "http://jameslantz.net/smilebot"
  },
  S = () => [N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013_HOOK],
  A = () => [N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013];

function C(e) {
  let t = A(),
    n = I.default.extractTimestamp(e) % t.length;
  return t[n]
}

function h(e) {
  return (0, s.astToString)(N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
    username: e,
    usernameOnClick: m.NOOP
  }))
}

function g(e, t) {
  let n = f.default.getChannel(t);
  if (null == n) return h(e);
  let l = E.default.getGuild(n.getGuildId());
  return null == l ? h(e) : (0, s.astToString)(N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
    username: e,
    usernameOnClick: m.NOOP
  }))
}
var M = {
  stringify: function(e, t) {
    var n, I, p, S;
    let A = null === (n = e.mentions) || void 0 === n ? void 0 : n[0],
      M = null != A && "string" != typeof A ? _.default.getUser(A.id) : void 0,
      O = e.channel_id,
      R = T.default.getName(null, O, e.author);
    switch (e.type) {
      case m.MessageTypes.RECIPIENT_ADD:
        if (null == M) return;
        return (0, s.astToString)(N.default.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD.astFormat({
          username: R,
          usernameOnClick: m.NOOP,
          otherUsername: T.default.getName(null, O, M),
          otherUsernameOnClick: m.NOOP
        }));
      case m.MessageTypes.RECIPIENT_REMOVE:
        if (null == M) return;
        let L = e.author;
        if (null == L || L.id === M.id) return (0, s.astToString)(N.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF.astFormat({
          username: R,
          usernameOnClick: m.NOOP
        }));
        return (0, s.astToString)(N.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE.astFormat({
          username: R,
          usernameOnClick: m.NOOP,
          otherUsername: T.default.getName(null, O, M),
          otherUsernameOnClick: m.NOOP
        }));
      case m.MessageTypes.CALL:
        let {
          call: v
        } = e;
        if (null != v && -1 === v.participants.indexOf(c.default.getId())) return (0, s.astToString)(N.default.Messages.SYSTEM_MESSAGE_CALL_STARTED.astFormat({
          username: R,
          usernameOnClick: m.NOOP
        }));
        return;
      case m.MessageTypes.CHANNEL_NAME_CHANGE:
        return (0, s.astToString)((t.isForumPost() ? N.default.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE : N.default.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE).astFormat({
          username: R,
          usernameOnClick: m.NOOP,
          channelName: e.content
        }));
      case m.MessageTypes.CHANNEL_ICON_CHANGE:
        return (0, s.astToString)(N.default.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE.astFormat({
          username: R,
          usernameOnClick: m.NOOP
        }));
      case m.MessageTypes.CHANNEL_PINNED_MESSAGE:
        return (0, s.astToString)(N.default.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA.astFormat({
          username: R,
          usernameOnClick: m.NOOP
        }));
      case m.MessageTypes.USER_JOIN:
        return (0, s.astToString)(C(e.id).astFormat({
          username: R,
          usernameOnClick: m.NOOP
        }));
      case m.MessageTypes.GUILD_BOOST:
        return h(R);
      case m.MessageTypes.GUILD_BOOST_TIER_1:
      case m.MessageTypes.GUILD_BOOST_TIER_2:
      case m.MessageTypes.GUILD_BOOST_TIER_3:
        return g(R, O);
      case m.MessageTypes.GUILD_INVITE_REMINDER:
        return N.default.Messages.SYSTEM_MESSAGE_INVITE_NOTIFICATION;
      case m.MessageTypes.THREAD_STARTER_MESSAGE:
        return N.default.Messages.THREAD_STARTER_MESSAGE_NOTIFICATION.format({
          username: R,
          threadName: t.name
        });
      case m.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE:
        if (e instanceof d.default) return null;
        return (0, s.astToString)((0, i.getRoleSubscriptionPurchaseSystemMessageContentMobile)({
          username: R,
          guildId: t.guild_id,
          roleSubscriptionData: e.role_subscription_data
        }));
      case m.MessageTypes.PURCHASE_NOTIFICATION:
        if (e instanceof d.default || (null === (p = e.purchase_notification) || void 0 === p ? void 0 : null === (I = p.guild_product_purchase) || void 0 === I ? void 0 : I.product_name) == null) return null;
        return (0, s.astToString)((0, a.getGuildProductPurchaseSystemMessageContentMobile)({
          username: R,
          productName: e.purchase_notification.guild_product_purchase.product_name
        }));
      case m.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
        if (e instanceof d.default) return null;
        let P = (0, o.getMessageAuthor)((0, r.createMessageRecord)(e));
        return (0, s.astToString)((0, l.getApplicationSubscriptionSystemMessageASTContent)({
          application: e.application,
          username: P.nick
        }));
      case m.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED:
        if (e instanceof d.default) return null;
        return (0, s.astToString)((0, u.getPrivateChannelIntegrationAddedSystemMessageASTContent)({
          application: e.application,
          username: (0, o.getMessageAuthor)((0, r.createMessageRecord)(e)).nick
        }));
      case m.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
        if (e instanceof d.default) return null;
        return (0, s.astToString)((0, u.getPrivateChannelIntegrationRemovedSystemMessageASTContent)({
          application: e.application,
          username: (0, o.getMessageAuthor)((0, r.createMessageRecord)(e)).nick
        }));
      case m.MessageTypes.AUTO_MODERATION_ACTION:
        if (null === (S = e.embeds) || void 0 === S ? void 0 : S.some(e => {
            let {
              type: t
            } = e;
            return t === m.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
          })) return function(e) {
          let t = f.default.getChannel(e);
          if (null == t) return null;
          let n = E.default.getGuild(t.getGuildId());
          return null == n ? null : (0, s.astToString)(N.default.Messages.GUILD_SERVER_RAID_ALERT_NOTIFICATION.astFormat({
            guildName: n.name
          }))
        }(O);
        return e.content;
      case m.MessageTypes.GUILD_INCIDENT_ALERT_MODE_ENABLED:
        return function(e, t, n) {
          let l = f.default.getChannel(t);
          if (null == l) return null;
          let a = E.default.getGuild(l.getGuildId());
          return null == a ? null : (0, s.astToString)(N.default.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_NOTIFICATION.astFormat({
            username: e,
            guildName: a.name,
            time: "" !== n ? new Date(n).toLocaleString(N.default.getLocale(), {
              hour: "numeric",
              minute: "2-digit"
            }) : ""
          }))
        }(R, O, e.content);
      case m.MessageTypes.GUILD_INCIDENT_ALERT_MODE_DISABLED:
        return function(e, t) {
          let n = f.default.getChannel(t);
          if (null == n) return null;
          let l = E.default.getGuild(n.getGuildId());
          return null == l ? null : (0, s.astToString)(N.default.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_NOTIFICATION.astFormat({
            username: e,
            guildName: l.name
          }))
        }(R, O);
      default:
        return e.content
    }
  },
  getSystemMessageUserJoin: function(e) {
    let t = S(),
      n = I.default.extractTimestamp(e) % t.length;
    return t[n]
  },
  getSystemMessageUserJoinMobile: C,
  getSystemMessageBotJoin: function(e) {
    return null == p[e] ? null : N.default.Messages.SYSTEM_MESSAGE_GUILD_BOT_JOIN.format({
      learnOnClick: {
        onClick: () => window.open(p[e])
      }
    })
  }
}