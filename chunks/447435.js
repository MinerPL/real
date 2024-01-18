"use strict";
n.r(t), n.d(t, {
  resolveDefaultSetting: function() {
    return A
  },
  getExplicitContentSettingOrDefault: function() {
    return D
  },
  getShouldObscureForSetting: function() {
    return N
  },
  shouldRedactExplicitContent: function() {
    return O
  },
  updateExplicitContentSetting: function() {
    return b
  },
  ObscuredMediaTypes: function() {
    return s
  },
  isMediaObscured: function() {
    return P
  },
  getObscuredMediaForMessage: function() {
    return k
  },
  isPendingScan: function() {
    return R
  },
  TrackMediaRedactionActionType: function() {
    return i
  },
  trackMediaRedactionAction: function() {
    return V
  },
  TimeoutCancelSource: function() {
    return r
  },
  trackScanTiming: function() {
    return M
  },
  trackScanningTimedOut: function() {
    return w
  },
  trackExplicitMediaRedactableMessagedLoaded: function() {
    return L
  },
  trackExplicitMediaScanComplete: function() {
    return U
  },
  handleExplicitMediaScanTimeoutForMessage: function() {
    return G
  }
}), n("702976");
var s, i, r, a, o, d, u = n("432710"),
  l = n("151426"),
  f = n("676574"),
  _ = n("155084"),
  c = n("684337"),
  g = n("845579"),
  m = n("42203"),
  h = n("27618"),
  v = n("697218"),
  E = n("599110"),
  p = n("568734"),
  y = n("983850"),
  C = n("457971"),
  T = n("49111"),
  S = n("568456");
n("782340");
let I = () => {
    let e = v.default.getCurrentUser();
    return (null == e ? void 0 : e.nsfwAllowed) === !1 ? l.ExplicitContentRedaction.BLUR : l.ExplicitContentRedaction.SHOW
  },
  A = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!e) return I();
    let n = g.ExplicitContentFilter.getSetting();
    return t ? n === S.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS ? l.ExplicitContentRedaction.BLOCK : I() : n === S.ExplicitContentFilterTypes.NON_FRIENDS || n === S.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS ? l.ExplicitContentRedaction.BLOCK : I()
  },
  D = () => {
    let e = g.ExplicitContentSettings.getSetting();
    return {
      explicitContentGuilds: e.explicitContentGuilds === l.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? A() : e.explicitContentGuilds,
      explicitContentNonFriendDm: e.explicitContentNonFriendDm === l.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? A(!0) : e.explicitContentNonFriendDm,
      explicitContentFriendDm: e.explicitContentFriendDm === l.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? A(!0, !0) : e.explicitContentFriendDm
    }
  };

function N(e) {
  return e === l.ExplicitContentRedaction.BLUR || e === l.ExplicitContentRedaction.BLOCK
}

function O(e) {
  var t;
  if (!(0, C.isEligibleForExplicitMediaRedaction)()) return !1;
  let n = v.default.getCurrentUser();
  if (null == n || (null === (t = e.author) || void 0 === t ? void 0 : t.id) === n.id) return !1;
  let {
    explicitContentGuilds: s,
    explicitContentFriendDm: i,
    explicitContentNonFriendDm: r
  } = D(), a = m.default.getChannel(e.channel_id);
  if (null == a) return !1;
  if (a.isDM() || a.isGroupDM()) return null != e.author && h.default.getFriendIDs().includes(e.author.id) ? N(i) : N(r);
  return N(s)
}
let b = e => {
  let t = D();
  g.ExplicitContentSettings.updateSetting({
    ...t,
    ...e
  })
};

function P(e, t) {
  var n, s;
  if (!t) return !1;
  if (f.default.get("obscure_blur_effect_enabled")) return !0;
  switch (e.type) {
    case 1:
      return (0, p.hasFlag)(null !== (n = e.media.flags) && void 0 !== n ? n : 0, T.MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA);
    case 0:
      return (0, p.hasFlag)(null !== (s = e.media.flags) && void 0 !== s ? s : 0, T.MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA);
    default:
      return !1
  }
}

function k(e) {
  let t = O(e);
  return t ? {
    obscuredAttachments: e.attachments.filter(e => P({
      type: 0,
      media: e
    }, !0)),
    obscuredEmbeds: e.embeds.filter(e => P({
      type: 1,
      media: e
    }, !0))
  } : {
    obscuredAttachments: [],
    obscuredEmbeds: []
  }
}

function R(e) {
  return !f.default.get("explicit_media_redaction_ignore_pending_scan") && null == e
}

function V(e) {
  let {
    action: t,
    channelId: n,
    messageId: s
  } = e;
  if (null == n || null == s) return;
  let i = m.default.getChannel(n);
  E.default.track(T.AnalyticEvents.EXPLICIT_MEDIA_ACTION, {
    action: t,
    guild_id: null == i ? void 0 : i.guild_id,
    channel_id: n,
    message_id: s,
    user_is_underage: (0, c.isCurrentUserTeen)()
  })
}

function M(e, t) {
  let n = Date.now() - e;
  _.default.increment({
    name: u.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
    tags: ["timingBucket:".concat(Math.min(Math.floor(n / 1e3), 3)), "source:".concat(t)]
  })
}

function w(e) {
  let {
    channelId: t,
    messageId: n,
    attachmentIds: s,
    embedIds: i
  } = e;
  if (null == t || null == n) return;
  let r = m.default.getChannel(t);
  E.default.track(T.AnalyticEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
    channel_id: t,
    guild_id: null == r ? void 0 : r.guild_id,
    message_id: n,
    embed_ids: i,
    user_is_underage: (0, c.isCurrentUserTeen)(),
    scan_timeout_duration: y.MESSAGE_SCAN_TIMEOUT,
    attachment_ids_v2: s
  }), _.default.increment({
    name: u.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT
  })
}

function L(e) {
  let {
    channelId: t,
    numOfAttachments: n,
    numOfAttachmentsPendingScan: s,
    numOfEmbeds: i,
    numOfEmbedsPendingScan: r
  } = e;
  if (null == t) return;
  let a = m.default.getChannel(t);
  E.default.track(T.AnalyticEvents.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
    channel_id: t,
    guild_id: null == a ? void 0 : a.guild_id,
    num_of_attachments: n,
    num_of_attachments_pending_scan: s,
    num_of_embeds: i,
    num_of_embeds_pending_scan: r
  })
}

function U(e) {
  let {
    messageId: t,
    channelId: n,
    numOfAttachments: s,
    numOfExplicitAttachments: i,
    numOfEmbeds: r,
    numOfExplicitEmbeds: a
  } = e;
  if (null == n) return;
  let o = m.default.getChannel(n);
  E.default.track(T.AnalyticEvents.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
    message_id: t,
    channel_id: n,
    channel_type: null == o ? void 0 : o.type,
    guild_id: null == o ? void 0 : o.guild_id,
    num_of_attachments: s,
    num_of_explicit_attachments: i,
    num_of_embeds: r,
    num_of_explicit_embeds: a
  })
}

function G(e) {
  let t = e.attachments.map(e => (null == e.content_scan_version && (e.content_scan_version = -1), e));
  e = e.set("attachments", t);
  let n = e.embeds.map(e => (null == e.contentScanVersion && (e.contentScanVersion = -1), e));
  return e = e.set("embeds", n)
}(a = s || (s = {}))[a.Attachment = 0] = "Attachment", a[a.Embed = 1] = "Embed", (o = i || (i = {})).EXPLICIT_MEDIA_LEARN_MORE_VIEWED = "explicit_media_learn_more_viewed", o.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = "explicit_media_learn_more_click_settings", o.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = "explicit_media_learn_more_click_learn_more", o.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = "explicit_media_learn_more_click_dismiss", o.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = "explicit_media_learn_more_click_false_positive", o.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = "explicit_media_false_positive_viewed", o.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = "explicit_media_false_positive_click_confirm", o.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = "explicit_media_false_positive_click_cancel", (d = r || (r = {})).UPDATE = "update", d.TIMEOUT = "timeout"