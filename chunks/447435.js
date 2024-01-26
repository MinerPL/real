"use strict";
n.r(t), n.d(t, {
  resolveDefaultSetting: function() {
    return N
  },
  getExplicitContentSettingOrDefault: function() {
    return R
  },
  getShouldObscureForSetting: function() {
    return O
  },
  shouldRedactExplicitContent: function() {
    return D
  },
  updateExplicitContentSetting: function() {
    return P
  },
  ObscuredMediaTypes: function() {
    return i
  },
  isMediaObscured: function() {
    return b
  },
  getObscuredMediaForMessage: function() {
    return L
  },
  isPendingScan: function() {
    return M
  },
  TrackMediaRedactionActionType: function() {
    return s
  },
  trackMediaRedactionAction: function() {
    return U
  },
  TimeoutCancelSource: function() {
    return r
  },
  trackScanTiming: function() {
    return k
  },
  trackScanningTimedOut: function() {
    return w
  },
  trackExplicitMediaRedactableMessagedLoaded: function() {
    return V
  },
  trackExplicitMediaScanComplete: function() {
    return G
  },
  handleExplicitMediaScanTimeoutForMessage: function() {
    return F
  },
  isExplicitMediaBelowConstraints: function() {
    return x
  }
}), n("702976");
var i, s, r, a, o, l, u = n("432710"),
  d = n("151426"),
  c = n("676574"),
  f = n("155084"),
  _ = n("684337"),
  h = n("845579"),
  g = n("42203"),
  m = n("27618"),
  E = n("697218"),
  p = n("599110"),
  v = n("568734"),
  S = n("983850"),
  T = n("457971"),
  I = n("612920"),
  C = n("49111"),
  A = n("568456");
n("782340");
let y = () => {
    let e = E.default.getCurrentUser();
    return (null == e ? void 0 : e.nsfwAllowed) === !1 ? d.ExplicitContentRedaction.BLUR : d.ExplicitContentRedaction.SHOW
  },
  N = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!e) return y();
    let n = h.ExplicitContentFilter.getSetting();
    return t ? n === A.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS ? d.ExplicitContentRedaction.BLOCK : y() : n === A.ExplicitContentFilterTypes.NON_FRIENDS || n === A.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS ? d.ExplicitContentRedaction.BLOCK : y()
  },
  R = () => {
    let e = h.ExplicitContentSettings.getSetting();
    return {
      explicitContentGuilds: e.explicitContentGuilds === d.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? N() : e.explicitContentGuilds,
      explicitContentNonFriendDm: e.explicitContentNonFriendDm === d.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? N(!0) : e.explicitContentNonFriendDm,
      explicitContentFriendDm: e.explicitContentFriendDm === d.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? N(!0, !0) : e.explicitContentFriendDm
    }
  };

function O(e) {
  return e === d.ExplicitContentRedaction.BLUR || e === d.ExplicitContentRedaction.BLOCK
}

function D(e) {
  var t;
  if (!(0, T.isEligibleForExplicitMediaRedaction)()) return !1;
  let n = E.default.getCurrentUser();
  if (null == n || (null === (t = e.author) || void 0 === t ? void 0 : t.id) === n.id) return !1;
  let {
    explicitContentGuilds: i,
    explicitContentFriendDm: s,
    explicitContentNonFriendDm: r
  } = R(), a = g.default.getChannel(e.channel_id);
  if (null == a) return !1;
  if (a.isDM() || a.isGroupDM()) return null != e.author && m.default.getFriendIDs().includes(e.author.id) ? O(s) : O(r);
  return O(i)
}
let P = e => {
  let t = R();
  h.ExplicitContentSettings.updateSetting({
    ...t,
    ...e
  })
};

function b(e, t) {
  var n, i;
  if (!t) return !1;
  if (c.default.get("obscure_blur_effect_enabled")) return !0;
  switch (e.type) {
    case 1:
      return (0, v.hasFlag)(null !== (n = e.media.flags) && void 0 !== n ? n : 0, C.MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA);
    case 0:
      return (0, v.hasFlag)(null !== (i = e.media.flags) && void 0 !== i ? i : 0, C.MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA);
    default:
      return !1
  }
}

function L(e) {
  let t = D(e);
  return t ? {
    obscuredAttachments: e.attachments.filter(e => b({
      type: 0,
      media: e
    }, !0)),
    obscuredEmbeds: e.embeds.filter(e => b({
      type: 1,
      media: e
    }, !0))
  } : {
    obscuredAttachments: [],
    obscuredEmbeds: []
  }
}

function M(e) {
  return !c.default.get("explicit_media_redaction_ignore_pending_scan") && null == e
}

function U(e) {
  let {
    action: t,
    channelId: n,
    messageId: i
  } = e;
  if (null == n || null == i) return;
  let s = g.default.getChannel(n);
  p.default.track(C.AnalyticEvents.EXPLICIT_MEDIA_ACTION, {
    action: t,
    guild_id: null == s ? void 0 : s.guild_id,
    channel_id: n,
    message_id: i,
    user_is_underage: (0, _.isCurrentUserTeen)()
  })
}

function k(e, t) {
  let n = Date.now() - e;
  f.default.increment({
    name: u.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
    tags: ["timingBucket:".concat(Math.min(Math.floor(n / 1e3), 3)), "source:".concat(t)]
  })
}

function w(e) {
  let {
    channelId: t,
    messageId: n,
    attachmentIds: i,
    embedIds: s
  } = e;
  if (null == t || null == n) return;
  let r = g.default.getChannel(t);
  p.default.track(C.AnalyticEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
    channel_id: t,
    guild_id: null == r ? void 0 : r.guild_id,
    message_id: n,
    embed_ids: s,
    user_is_underage: (0, _.isCurrentUserTeen)(),
    scan_timeout_duration: S.MESSAGE_SCAN_TIMEOUT,
    attachment_ids_v2: i
  }), f.default.increment({
    name: u.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT
  })
}

function V(e) {
  let {
    channelId: t,
    numOfAttachments: n,
    numOfAttachmentsPendingScan: i,
    numOfEmbeds: s,
    numOfEmbedsPendingScan: r
  } = e;
  if (null == t) return;
  let a = g.default.getChannel(t);
  p.default.track(C.AnalyticEvents.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
    channel_id: t,
    guild_id: null == a ? void 0 : a.guild_id,
    num_of_attachments: n,
    num_of_attachments_pending_scan: i,
    num_of_embeds: s,
    num_of_embeds_pending_scan: r
  })
}

function G(e) {
  let {
    messageId: t,
    channelId: n,
    numOfAttachments: i,
    numOfExplicitAttachments: s,
    numOfEmbeds: r,
    numOfExplicitEmbeds: a
  } = e;
  if (null == n) return;
  let o = g.default.getChannel(n);
  p.default.track(C.AnalyticEvents.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
    message_id: t,
    channel_id: n,
    channel_type: null == o ? void 0 : o.type,
    guild_id: null == o ? void 0 : o.guild_id,
    num_of_attachments: i,
    num_of_explicit_attachments: s,
    num_of_embeds: r,
    num_of_explicit_embeds: a
  })
}

function F(e) {
  let t = e.attachments.map(e => (null == e.content_scan_version && (e.content_scan_version = -1), e));
  e = e.set("attachments", t);
  let n = e.embeds.map(e => (null == e.contentScanVersion && (e.contentScanVersion = -1), e));
  return e = e.set("embeds", n)
}(a = i || (i = {}))[a.Attachment = 0] = "Attachment", a[a.Embed = 1] = "Embed", (o = s || (s = {})).EXPLICIT_MEDIA_LEARN_MORE_VIEWED = "explicit_media_learn_more_viewed", o.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = "explicit_media_learn_more_click_settings", o.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = "explicit_media_learn_more_click_learn_more", o.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = "explicit_media_learn_more_click_dismiss", o.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = "explicit_media_learn_more_click_false_positive", o.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = "explicit_media_false_positive_viewed", o.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = "explicit_media_false_positive_click_confirm", o.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = "explicit_media_false_positive_click_cancel", (l = r || (r = {})).UPDATE = "update", l.TIMEOUT = "timeout";
let x = (e, t) => null != e && null != t && (e <= I.EXPLICIT_MEDIA_MIN_WIDTH || t <= I.EXPLICIT_MEDIA_MIN_HEIGHT)