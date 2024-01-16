"use strict";
n.r(t), n.d(t, {
  createMessageRecord: function() {
    return y
  },
  updateServerMessage: function() {
    return T
  },
  updateMessageRecord: function() {
    return C
  },
  canEditMessageWithStickers: function() {
    return N
  }
}), n("702976");
var s = n("866227"),
  i = n.n(s),
  r = n("312016");
n("584375");
var a = n("552310"),
  o = n("24373"),
  d = n("459018"),
  u = n("719926"),
  l = n("766274"),
  f = n("271938"),
  _ = n("27618"),
  c = n("697218"),
  g = n("240873"),
  m = n("659632");
n("773336"), n("158998");
var h = n("406297");
n("574073");
var v = n("894488"),
  E = n("49111");
n("782340");
let p = new l.default({
  id: "???",
  username: "???"
});

function y(e) {
  var t, n, s, o, g, v, y, T, C;
  let {
    reactions: N,
    interactionData: O
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, b = null !== (o = null === (t = e.mentions) || void 0 === t ? void 0 : t.map(e => e.id)) && void 0 !== o ? o : [], P = null !== (g = e.mention_roles) && void 0 !== g ? g : [], V = null !== (v = e.mention_channels) && void 0 !== v ? v : [], R = e.message_reference, k = i(new Date(e.timestamp)), M = e.type === E.MessageTypes.THREAD_CREATED ? [] : (0, r.default)(e.content);
  let w = null == (T = e).author ? p : null != T.webhook_id ? new l.default(T.author) : null !== (C = c.default.getUser(T.author.id)) && void 0 !== C ? C : new l.default(T.author),
    L = null == e ? void 0 : e.gift_info,
    U = null != e.interaction ? d.default.createFromServer(e.interaction) : null,
    G = e.type === E.MessageTypes.THREAD_STARTER_MESSAGE ? null === (s = e.referenced_message) || void 0 === s ? void 0 : null === (n = s.author) || void 0 === n ? void 0 : n.id : void 0,
    F = e.type === E.MessageTypes.PREMIUM_REFERRAL ? e.content : void 0,
    x = e.content;
  return e.type === E.MessageTypes.PREMIUM_REFERRAL && (x = ""), new u.default({
    ...e,
    author: w,
    webhookId: e.webhook_id,
    blocked: _.default.isBlocked(w.id) || null != G && _.default.isBlocked(G),
    timestamp: k,
    editedTimestamp: null != e.edited_timestamp ? i(new Date(e.edited_timestamp)) : null,
    mentionEveryone: e.mention_everyone,
    mentions: b,
    mentionRoles: P,
    mentionChannels: V,
    messageReference: R,
    mentioned: (0, h.isMentioned)({
      userId: f.default.getId(),
      channelId: e.channel_id,
      mentionEveryone: null !== (y = e.mention_everyone) && void 0 !== y && y,
      mentionUsers: b,
      mentionRoles: P
    }),
    attachments: S(e),
    embeds: A(e),
    codedLinks: M,
    giftCodes: (0, m.isGiftCodeEmbed)(e) ? (0, m.findGiftCodes)((null == e ? void 0 : e.embeds[0]).url) : (0, m.findGiftCodes)(e.content),
    content: x,
    referralTrialOfferId: F,
    call: I(e.call, k),
    reactions: D(null != N ? N : e.reactions),
    interaction: U,
    interactionData: null != O ? O : e.interaction_data,
    roleSubscriptionData: e.role_subscription_data,
    purchaseNotification: e.purchase_notification,
    poll: null == e.poll ? void 0 : (0, a.default)(e.poll),
    giftInfo: null == L ? void 0 : L
  })
}

function T(e, t) {
  return null != t.edited_timestamp ? {
    ...t,
    reactions: e.reactions,
    interaction_data: e.interaction_data
  } : {
    ...e,
    ...t
  }
}

function C(e, t) {
  if (null != t.edited_timestamp) return y(t, {
    reactions: e.reactions,
    interactionData: e.interactionData
  });
  let n = e;
  if (null != t.call && (n = n.set("call", I(t.call, e.timestamp))), null != t.attachments && (n = n.set("attachments", S(t))), null != t.content && "" !== t.content && (n = n.set("content", t.content)), null != t.embeds && (n = n.set("embeds", A(t))), t.pinned !== n.pinned && (n = n.set("pinned", t.pinned)), null != n.webhookId && null != t.author && (n = n.set("author", new l.default(t.author))), null != t.flags && t.flags !== n.flags && (n = n.set("flags", t.flags)), null != t.components && (n = n.set("components", t.components)), null != t.role_subscription_data && (n = n.set("roleSubscriptionData", t.role_subscription_data)), null != t.reactions) {
    var s;
    n = n.set("reactions", D(null !== (s = e.reactions) && void 0 !== s ? s : t.reactions))
  }
  return n
}

function S(e) {
  return null == e.attachments ? [] : e.attachments.map(e => ({
    ...e,
    spoiler: e.filename.startsWith(v.SPOILER_ATTACHMENT_PREFIX)
  }))
}

function I(e, t) {
  if (null != e) {
    let n = null != e.ended_timestamp ? i(new Date(e.ended_timestamp)) : null,
      s = null != n ? i.duration(n.diff(t)) : null;
    return {
      participants: e.participants,
      endedTimestamp: n,
      duration: s
    }
  }
  return null
}

function A(e) {
  if (null == e.embeds) return [];
  let t = e.embeds.map(t => (0, g.sanitizeEmbed)(e.channel_id, e.id, t));
  return (0, g.mergeEmbedsOnURL)(t)
}

function D(e) {
  return null == e ? [] : e.map(e => {
    let t = {
      ...e
    };
    if ((null == t ? void 0 : t.count_details) != null) {
      var n, s;
      t.burst_count = null !== (n = t.count_details.burst) && void 0 !== n ? n : 0, t.count = null !== (s = t.count_details.normal) && void 0 !== s ? s : 0
    }
    return t.count < 0 && (t.count = 0), t.burst_count < 0 && (t.burst_count = 0), t
  })
}
let N = e => {
  let t = (0, o.getMessageStickers)(e);
  return 0 === t.length || "" !== e.content
}