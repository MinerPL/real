"use strict";
n.r(t), n.d(t, {
  MESSAGE_SCAN_TIMEOUT: function() {
    return S
  },
  MAX_TIMEOUT_FOR_JITTER: function() {
    return I
  },
  default: function() {
    return X
  }
}), n("222007"), n("808653");
var s = n("345570"),
  i = n.n(s),
  r = n("452016"),
  a = n.n(r),
  o = n("913144"),
  d = n("689988"),
  u = n("692038"),
  l = n("256572"),
  f = n("271938"),
  _ = n("982108"),
  c = n("42203"),
  g = n("377253"),
  m = n("18494"),
  h = n("162771"),
  v = n("695681"),
  E = n("457971"),
  p = n("447435"),
  y = n("574933"),
  C = n("49111"),
  T = n("397336");
let S = 3e3,
  I = 800,
  A = {};

function D(e) {
  return "".concat(e.channel_id, ":").concat(e.id)
}

function N() {
  Object.values(A).forEach(e => {
    let {
      timeout: t
    } = e;
    clearTimeout(t)
  }), A = {}
}

function O(e, t) {
  if (null == e.id || null == e.channel_id) return;
  let n = D(e);
  if (null != A[n]) {
    let {
      timeout: s
    } = A[n];
    return function(e, t) {
      let n = D(e),
        {
          setAt: s
        } = A[n];
      if (t === p.TimeoutCancelSource.UPDATE) {
        var i, r;
        let t = null !== (i = e.attachments) && void 0 !== i ? i : [],
          n = null !== (r = e.embeds) && void 0 !== r ? r : [],
          s = t.filter(e => (0, p.isMediaObscured)({
            type: p.ObscuredMediaTypes.Attachment,
            media: e
          }, !0)),
          a = n.filter(e => (0, p.isMediaObscured)({
            type: p.ObscuredMediaTypes.Embed,
            media: e
          }, !0));
        (0, p.trackExplicitMediaScanComplete)({
          messageId: e.id,
          channelId: e.channel_id,
          numOfAttachments: t.length,
          numOfEmbeds: n.length,
          numOfExplicitAttachments: s.length,
          numOfExplicitEmbeds: a.length
        })
      }(0, p.trackScanTiming)(s, t)
    }(e, t), clearTimeout(s), delete A[n], !0
  }
  return !1
}
let b = (e, t) => {
  if (0 !== e.length) {
    if (t) {
      (0, v.sendMultiChannelMessagesForScanning)(e);
      return
    }(0, v.sendMessagesForScanning)(e[0].channel_id, e.map(e => e.id))
  }
};

function P(e, t) {
  let {
    forceBatchScan: n = !1,
    jitter: s = !1
  } = null != t ? t : {};
  e.forEach(e => {
    let t = D(e);
    null == A[t] && (A[t] = {
      setAt: Date.now(),
      timeout: setTimeout(() => {
        ! function(e) {
          if (O(e, p.TimeoutCancelSource.TIMEOUT)) {
            let t = g.default.getMessage(e.channel_id, e.id),
              {
                attachmentIds: n,
                embedIds: s
              } = L(t);
            (0, p.trackScanningTimedOut)({
              channelId: e.channel_id,
              messageId: e.id,
              attachmentIds: n,
              embedIds: s
            }), o.default.dispatch({
              type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT",
              messageId: e.id,
              channelId: e.channel_id
            })
          }
        }(e)
      }, S)
    })
  });
  let i = n || new Set(e.map(e => e.channel_id)).size > 1;
  s ? setTimeout(() => {
    let t = e.filter(e => null != A[D(e)]);
    b(t, i)
  }, Math.random() * I) : b(e, i)
}
let k = e => null == e.content_scan_version || e.content_scan_version < 1,
  R = e => {
    var t, n, s, i, r, a, o, d;
    let u = null != (d = e).content_scan_version ? d.content_scan_version : null != d.contentScanVersion ? d.contentScanVersion : null;
    return !((null === (t = e.video) || void 0 === t ? void 0 : t.width) === 0 && (null === (n = e.video) || void 0 === n ? void 0 : n.height) === 0 || (null === (s = e.thumbnail) || void 0 === s ? void 0 : s.width) === 0 && (null === (i = e.thumbnail) || void 0 === i ? void 0 : i.height) === 0 || (null === (r = e.image) || void 0 === r ? void 0 : r.width) === 0 && (null === (a = e.image) || void 0 === a ? void 0 : a.height) === 0 || "images" in e && (null === (o = e.images) || void 0 === o ? void 0 : o.some(e => 0 === e.width && 0 === e.height))) && (null == u || u < 1)
  };

function V(e) {
  let {
    attachmentIds: t,
    embedIds: n
  } = L(e);
  return t.length > 0 || n.length > 0
}

function M(e) {
  let t = e.reduce((e, t) => {
    var n, s, i, r, a, o, d, u;
    null == e[t.channel_id] && (e[t.channel_id] = {
      numOfAttachments: 0,
      numOfAttachmentsPendingScan: 0,
      numOfEmbeds: 0,
      numOfEmbedsPendingScan: 0
    });
    let l = e[t.channel_id];
    return l.numOfAttachments += null !== (a = null === (n = t.attachments) || void 0 === n ? void 0 : n.length) && void 0 !== a ? a : 0, l.numOfEmbeds += null !== (o = null === (s = t.embeds) || void 0 === s ? void 0 : s.length) && void 0 !== o ? o : 0, l.numOfAttachmentsPendingScan += null !== (d = null === (i = t.attachments) || void 0 === i ? void 0 : i.filter(k).length) && void 0 !== d ? d : 0, l.numOfEmbedsPendingScan += null !== (u = null == t ? void 0 : null === (r = t.embeds) || void 0 === r ? void 0 : r.filter(R).length) && void 0 !== u ? u : 0, {
      ...e,
      [t.channel_id]: l
    }
  }, {});
  return t
}

function w(e) {
  return null != e && (null != e.attachments && e.attachments.length > 0 || null != e.embeds && e.embeds.length > 0)
}

function L(e) {
  var t, n, s, i, r, a, o, d;
  let u = null !== (r = null == e ? void 0 : null === (t = e.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== r ? r : 0,
    l = null !== (a = null == e ? void 0 : null === (n = e.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== a ? a : 0;
  if (0 === u && 0 === l) return {
    attachmentIds: [],
    embedIds: []
  };
  let f = null !== (o = null == e ? void 0 : null === (s = e.attachments) || void 0 === s ? void 0 : s.filter(k)) && void 0 !== o ? o : [],
    _ = null !== (d = null == e ? void 0 : null === (i = e.embeds) || void 0 === i ? void 0 : i.filter(R)) && void 0 !== d ? d : [];
  return {
    attachmentIds: f.map(e => e.id).filter(Boolean),
    embedIds: _.map((e, t) => "embed_".concat(t)).filter(Boolean)
  }
}

function U(e, t) {
  let {
    messagesPendingScan: n,
    attributesByChannelId: s
  } = function(e) {
    let t = e.filter(e => w(e) && (0, p.shouldRedactExplicitContent)(e)),
      n = e.map(e => {
        if (null != e && "referenced_message" in e && null != e.referenced_message && w(e.referenced_message)) return e.referenced_message
      }).filter(function(e) {
        return null != e
      });
    n.length > 0 && (t = [...t, ...n]);
    let s = a(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
      i = s.filter(e => V(e));
    return {
      messagesPendingScan: i,
      attributesByChannelId: M(s)
    }
  }(e);
  return Object.entries(s).forEach(e => {
    let [t, n] = e;
    (0, p.trackExplicitMediaRedactableMessagedLoaded)({
      channelId: t,
      numOfAttachments: n.numOfAttachments,
      numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
      numOfEmbeds: n.numOfEmbeds,
      numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
    })
  }), !!(n.length > 0) && (P(n, t), !0)
}

function G(e) {
  var t, n, s, i;
  let {
    message: r
  } = e;
  if (!(0, E.isEligibleForExplicitMediaRedaction)() || null == r.channel_id || null == r.id || (null === (t = r.author) || void 0 === t ? void 0 : t.id) === f.default.getId() || null == r.embeds && null == r.attachments) return !1;
  if (!V(r)) {
    let e = null !== (i = null !== (s = g.default.getMessage(r.channel_id, r.id)) && void 0 !== s ? s : y.default.getMessage(r.id, r.channel_id)) && void 0 !== i ? i : null === (n = l.default.getMessage(r.channel_id, r.id)) || void 0 === n ? void 0 : n.message;
    null != e && !V((0, u.updateMessageRecord)(e, r)) && O(e, p.TimeoutCancelSource.UPDATE)
  }
  let a = m.default.getChannelId(),
    o = _.default.getCurrentSidebarChannelId(a),
    d = r.channel_id === a || r.channel_id === o;
  if (!d) return !1;
  let c = g.default.getMessage(r.channel_id, r.id);
  return null != c && U([c])
}

function F(e) {
  var t, n;
  let {
    channelId: s,
    message: i,
    optimistic: r,
    isPushNotification: a
  } = e;
  if (!(0, E.isEligibleForExplicitMediaRedaction)() || r || a || null == s || (null === (t = i.author) || void 0 === t ? void 0 : t.id) === f.default.getId()) return !1;
  let o = m.default.getChannelId(),
    d = _.default.getCurrentSidebarChannelId(o),
    u = s === o || s === d,
    l = c.default.getChannel(s);
  if (!u) return !1;
  let g = null === (n = null == l ? void 0 : l.isPrivate()) || void 0 === n || n,
    h = (null == l ? void 0 : l.memberCount) == null || (null == l ? void 0 : l.memberCount) > 100;
  return U([i], {
    jitter: g && h
  })
}

function x(e) {
  let {
    channelId: t,
    messages: n
  } = e;
  if (!(0, E.isEligibleForExplicitMediaRedaction)() || null == t || null == n) return !1;
  let s = m.default.getChannelId(),
    i = _.default.getCurrentSidebarChannelId(s),
    r = t === s || t === i;
  return !!r && U(n)
}

function B(e) {
  let {
    messages: t
  } = e;
  if (!(0, E.isEligibleForExplicitMediaRedaction)() || null == t) return !1;
  let n = i(t),
    s = a(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
  return U(s)
}

function H(e) {
  let {
    guildId: t,
    threads: n
  } = e;
  if (null == n || !(0, E.isEligibleForExplicitMediaRedaction)()) return !1;
  let s = h.default.getGuildId() === t;
  if (!s) return !1;
  let i = Object.keys(n).map(e => n[e].first_message);
  return U(i)
}

function Y(e) {
  let {
    guildId: t,
    firstMessages: n
  } = e;
  if (null == n || !(0, E.isEligibleForExplicitMediaRedaction)()) return !1;
  let s = h.default.getGuildId() === t;
  return !!s && U(n, {
    forceBatchScan: !0
  })
}

function j(e) {
  let {
    channelId: t
  } = e;
  if (null == t || !(0, E.isEligibleForExplicitMediaRedaction)()) return !1;
  let n = t === m.default.getChannelId();
  return !!n && z(t)
}

function K(e) {
  let {
    settings: t,
    local: n
  } = e;
  if (!(0, E.isEligibleForExplicitMediaRedaction)() || !n || t.type !== T.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
  let s = m.default.getChannelId();
  return null != s && z(s)
}

function W(e) {
  let {
    channelId: t,
    chatOpen: n
  } = e;
  return !!(0, E.isEligibleForExplicitMediaRedaction)() && !!n && z(t)
}

function z(e) {
  let t = g.default.getMessages(e);
  return 0 !== t.length && function(e) {
    let {
      messagesPendingScan: t,
      attributesByChannelId: n
    } = function(e) {
      let t = e.filter(e => w(e) && (0, p.shouldRedactExplicitContent)(e)),
        n = e.map(e => {
          if (C.MessageTypesWithLazyLoadedReferences.has(e.type) && null != e.messageReference) {
            let t = l.default.getMessageByReference(e.messageReference);
            if (t.state === l.ReferencedMessageState.LOADED && null != t.message && w(t.message)) return t.message
          }
        }).filter(function(e) {
          return null != e
        });
      n.length > 0 && (t = [...t, ...n]);
      let s = a(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
        i = s.filter(e => V(e));
      return {
        messagesPendingScan: i,
        attributesByChannelId: M(s)
      }
    }(e);
    return Object.entries(n).forEach(e => {
      let [t, n] = e;
      (0, p.trackExplicitMediaRedactableMessagedLoaded)({
        channelId: t,
        numOfAttachments: n.numOfAttachments,
        numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
        numOfEmbeds: n.numOfEmbeds,
        numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
      })
    }), !!(t.length > 0) && (P(t), !0)
  }(t)
}
class q extends d.default {
  constructor(...e) {
    super(...e), this.actions = {
      LOAD_MESSAGES_SUCCESS: x,
      LOAD_FORUM_POSTS: H,
      LOAD_THREADS_SUCCESS: Y,
      LOAD_ARCHIVED_THREADS_SUCCESS: Y,
      MESSAGE_CREATE: F,
      MESSAGE_UPDATE: G,
      LOGOUT: N,
      SEARCH_FINISH: B,
      CHANNEL_SELECT: j,
      LOAD_PINNED_MESSAGES_SUCCESS: B,
      USER_SETTINGS_PROTO_UPDATE: K,
      CHANNEL_RTC_UPDATE_CHAT_OPEN: W
    }
  }
}
var X = new q