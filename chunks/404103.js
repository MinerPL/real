"use strict";
a.r(t), a.d(t, {
  default: function() {
    return N
  }
});
var l = a("611221"),
  n = a("913144"),
  s = a("316272"),
  i = a("887446"),
  d = a("582713"),
  r = a("271938"),
  u = a("982108"),
  o = a("42203"),
  c = a("18494"),
  f = a("162771"),
  m = a("599110"),
  h = a("713810"),
  E = a("185014"),
  g = a("886484"),
  I = a("60036"),
  _ = a("2804"),
  x = a("515631"),
  v = a("49111"),
  S = a("724210");
class C extends s.default {
  _initialize() {
    n.default.subscribe("MESSAGE_REACTION_ADD", this.handleReaction), n.default.subscribe("MESSAGE_REACTION_REMOVE", this.handleReaction), n.default.subscribe("SIDEBAR_VIEW_CHANNEL", this.handleSidebarViewChannel), n.default.subscribe("MESSAGE_CREATE", this.handleMessageCreate), n.default.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate)
  }
  _terminate() {
    n.default.unsubscribe("MESSAGE_REACTION_ADD", this.handleReaction), n.default.unsubscribe("MESSAGE_REACTION_REMOVE", this.handleReaction), n.default.unsubscribe("SIDEBAR_VIEW_CHANNEL", this.handleSidebarViewChannel), n.default.unsubscribe("MESSAGE_CREATE", this.handleMessageCreate), n.default.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate)
  }
  handleReaction(e) {
    let {
      type: t,
      userId: a,
      messageId: l,
      optimistic: n
    } = e;
    if (a !== r.default.getId() || !n) return;
    let s = f.default.getGuildId();
    if (null == s) return;
    let d = c.default.getChannelId();
    if (!(0, S.isGuildHomeChannel)(d)) return;
    let u = E.default.getItemForMessageId(s, l);
    if (null == u) return;
    let o = (0, I.default)(u);
    (0, h.trackFeedItemInteracted)({
      feed_item_type: (0, _.getFeedItemTypeFromId)(u.id),
      feed_item_id: u.id,
      load_id: E.default.getLoadId(s),
      action_type: "MESSAGE_REACTION_ADD" === t ? x.FeedItemInteractionType.REACTION_ADDED : x.FeedItemInteractionType.REACTION_REMOVED,
      guild_id: s,
      channel_id: o.channel_id,
      message_id: l,
      home_session_id: i.default.getHomeSessionId(s)
    })
  }
  handleSidebarViewChannel(e) {
    let {
      channelId: t,
      baseChannelId: a,
      sidebarType: n
    } = e;
    if (n !== d.SidebarType.VIEW_THREAD || !(0, S.isGuildHomeChannel)(a)) return;
    let s = f.default.getGuildId();
    if (null == s) return;
    let r = E.default.getItemForMessageId(s, t);
    if (null != r) r.type !== l.GuildFeedItemTypes.FORUM_POST && (0, h.trackFeedItemInteracted)({
      feed_item_type: (0, _.getFeedItemTypeFromId)(r.id),
      feed_item_id: r.id,
      load_id: E.default.getLoadId(s),
      action_type: x.FeedItemInteractionType.THREAD_EMBED_CLICKED,
      guild_id: s,
      channel_id: (0, g.getChannelIdForItem)(r),
      message_id: t,
      home_session_id: i.default.getHomeSessionId(s)
    })
  }
  handleMessageCreate(e) {
    let t, a, {
      optimistic: l,
      message: n
    } = e;
    if (!l || n.state !== v.MessageStates.SENDING) return;
    let s = f.default.getGuildId();
    if (null == s) return;
    let d = u.default.getSidebarState(S.StaticChannelRoute.GUILD_HOME);
    if (null == d || !(0, u.isViewChannelSidebar)(d)) return;
    let r = o.default.getChannel(d.channelId),
      c = (0, g.getSidebarMessageId)(d, r);
    if (null == c) return;
    let m = E.default.getItemForMessageId(s, c);
    if (null != m) {
      if (n.type === v.MessageTypes.DEFAULT) t = x.FeedItemInteractionType.MESSAGED_IN_SIDEBAR, a = c;
      else if (n.type === v.MessageTypes.REPLY) {
        var I, C;
        a = null === (I = n.message_reference) || void 0 === I ? void 0 : I.message_id, t = (null === (C = n.message_reference) || void 0 === C ? void 0 : C.message_id) === c ? x.FeedItemInteractionType.REPLIED_TO_MESSAGE : x.FeedItemInteractionType.REPLIED_IN_SIDEBAR
      }
      null != t && (0, h.trackFeedItemInteracted)({
        feed_item_type: (0, _.getFeedItemTypeFromId)(m.id),
        feed_item_id: m.id,
        load_id: E.default.getLoadId(s),
        action_type: t,
        guild_id: s,
        channel_id: n.channel_id,
        message_id: a,
        home_session_id: i.default.getHomeSessionId(s)
      })
    }
  }
  handleAppStateUpdate(e) {
    let {
      state: t
    } = e;
    if ("background" !== t) return;
    let a = f.default.getGuildId();
    null != a && m.default.track(v.AnalyticEvents.HOME_BACKGROUNDED, {
      guild_id: a,
      home_session_id: i.default.getHomeSessionId(a),
      load_id: E.default.getLoadId(a)
    })
  }
}
var N = new C