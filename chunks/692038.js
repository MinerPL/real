"use strict";
n.r(t), n.d(t, {
  createMessageRecord: function() {
    return S
  },
  updateServerMessage: function() {
    return T
  },
  updateMessageRecord: function() {
    return I
  },
  canEditMessageWithStickers: function() {
    return R
  }
}), n("702976");
var i = n("866227"),
  s = n.n(i),
  r = n("312016");
n("584375");
var a = n("552310"),
  o = n("24373"),
  l = n("459018"),
  u = n("719926"),
  d = n("766274"),
  c = n("271938"),
  f = n("27618"),
  _ = n("697218"),
  h = n("240873"),
  g = n("659632");
n("773336"), n("158998");
var m = n("406297");
n("574073");
var E = n("894488"),
  p = n("49111");
n("782340");
let v = new d.default({
  id: "???",
  username: "???"
});

function S(e) {
  var t, n, i, o, h, E, S, T, I;
  let {
    reactions: R,
    interactionData: O
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, D = null !== (o = null === (t = e.mentions) || void 0 === t ? void 0 : t.map(e => e.id)) && void 0 !== o ? o : [], P = null !== (h = e.mention_roles) && void 0 !== h ? h : [], b = null !== (E = e.mention_channels) && void 0 !== E ? E : [], L = e.message_reference, M = s(new Date(e.timestamp)), U = e.type === p.MessageTypes.THREAD_CREATED ? [] : (0, r.default)(e.content);
  let k = null == (T = e).author ? v : null != T.webhook_id ? new d.default(T.author) : null !== (I = _.default.getUser(T.author.id)) && void 0 !== I ? I : new d.default(T.author),
    w = null == e ? void 0 : e.gift_info,
    V = null != e.interaction ? l.default.createFromServer(e.interaction) : null,
    G = e.type === p.MessageTypes.THREAD_STARTER_MESSAGE ? null === (i = e.referenced_message) || void 0 === i ? void 0 : null === (n = i.author) || void 0 === n ? void 0 : n.id : void 0,
    F = e.type === p.MessageTypes.PREMIUM_REFERRAL ? e.content : void 0,
    x = e.content;
  return e.type === p.MessageTypes.PREMIUM_REFERRAL && (x = ""), new u.default({
    ...e,
    author: k,
    webhookId: e.webhook_id,
    blocked: f.default.isBlocked(k.id) || null != G && f.default.isBlocked(G),
    timestamp: M,
    editedTimestamp: null != e.edited_timestamp ? s(new Date(e.edited_timestamp)) : null,
    mentionEveryone: e.mention_everyone,
    mentions: D,
    mentionRoles: P,
    mentionChannels: b,
    messageReference: L,
    mentioned: (0, m.isMentioned)({
      userId: c.default.getId(),
      channelId: e.channel_id,
      mentionEveryone: null !== (S = e.mention_everyone) && void 0 !== S && S,
      mentionUsers: D,
      mentionRoles: P
    }),
    attachments: C(e),
    embeds: y(e),
    codedLinks: U,
    giftCodes: (0, g.isGiftCodeEmbed)(e) ? (0, g.findGiftCodes)((null == e ? void 0 : e.embeds[0]).url) : (0, g.findGiftCodes)(e.content),
    content: x,
    referralTrialOfferId: F,
    call: A(e.call, M),
    reactions: N(null != R ? R : e.reactions),
    interaction: V,
    interactionData: null != O ? O : e.interaction_data,
    roleSubscriptionData: e.role_subscription_data,
    purchaseNotification: e.purchase_notification,
    poll: null == e.poll ? void 0 : (0, a.default)(e.poll),
    giftInfo: null == w ? void 0 : w
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

function I(e, t) {
  if (null != t.edited_timestamp) return S(t, {
    reactions: e.reactions,
    interactionData: e.interactionData
  });
  let n = e;
  if (null != t.call && (n = n.set("call", A(t.call, e.timestamp))), null != t.attachments && (n = n.set("attachments", C(t))), null != t.content && "" !== t.content && (n = n.set("content", t.content)), null != t.embeds && (n = n.set("embeds", y(t))), t.pinned !== n.pinned && (n = n.set("pinned", t.pinned)), null != n.webhookId && null != t.author && (n = n.set("author", new d.default(t.author))), null != t.flags && t.flags !== n.flags && (n = n.set("flags", t.flags)), null != t.components && (n = n.set("components", t.components)), null != t.role_subscription_data && (n = n.set("roleSubscriptionData", t.role_subscription_data)), null != t.reactions) {
    var i;
    n = n.set("reactions", N(null !== (i = e.reactions) && void 0 !== i ? i : t.reactions))
  }
  return null != t.poll && (n = n.set("poll", (0, a.default)(t.poll))), n
}

function C(e) {
  return null == e.attachments ? [] : e.attachments.map(e => ({
    ...e,
    spoiler: e.filename.startsWith(E.SPOILER_ATTACHMENT_PREFIX)
  }))
}

function A(e, t) {
  if (null != e) {
    let n = null != e.ended_timestamp ? s(new Date(e.ended_timestamp)) : null,
      i = null != n ? s.duration(n.diff(t)) : null;
    return {
      participants: e.participants,
      endedTimestamp: n,
      duration: i
    }
  }
  return null
}

function y(e) {
  if (null == e.embeds) return [];
  let t = e.embeds.map(t => (0, h.sanitizeEmbed)(e.channel_id, e.id, t));
  return (0, h.mergeEmbedsOnURL)(t)
}

function N(e) {
  return null == e ? [] : e.map(e => {
    let t = {
      ...e
    };
    if ((null == t ? void 0 : t.count_details) != null) {
      var n, i;
      t.burst_count = null !== (n = t.count_details.burst) && void 0 !== n ? n : 0, t.count = null !== (i = t.count_details.normal) && void 0 !== i ? i : 0
    }
    return t.count < 0 && (t.count = 0), t.burst_count < 0 && (t.burst_count = 0), t
  })
}
let R = e => {
  let t = (0, o.getMessageStickers)(e);
  return 0 === t.length || "" !== e.content
}