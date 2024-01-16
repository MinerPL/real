"use strict";
n.r(t), n.d(t, {
  getMessageContentId: function() {
    return r
  },
  getMessageReplyId: function() {
    return l
  },
  getMessageUsernameId: function() {
    return o
  },
  getMessageTimestampId: function() {
    return u
  },
  getMessageReactionsId: function() {
    return c
  },
  getMessageAccessoriesId: function() {
    return d
  },
  getMessageAriaLabelledBy: function() {
    return m
  },
  getMessageAriaDescribedBy: function() {
    return f
  }
});
var a = n("862013"),
  i = n("913491"),
  s = n("49111");

function r(e) {
  return "message-content-".concat(e.id)
}

function l(e) {
  return "message-reply-context-".concat(e.id)
}

function o(e, t) {
  let n = null != t ? t : e.id;
  return "message-username-".concat(n)
}

function u(e) {
  return "message-timestamp-".concat(e.id)
}

function c(e) {
  return "message-reactions-".concat(e.id)
}

function d(e) {
  return "message-accessories-".concat(e.id)
}

function m(e, t, n) {
  let c = e.type === s.MessageTypes.REPLY && null != e.messageReference,
    m = e.embeds.length > 0,
    f = e.attachments.length > 0,
    g = e.stickerItems.length > 0,
    p = e.codedLinks.length > 0,
    E = e.hasFlag(s.MessageFlags.HAS_THREAD),
    A = m || f || g || p || E || e.type === s.MessageTypes.THREAD_CREATED,
    h = m && e.content === e.embeds[0].url && e.embeds[0].type === s.MessageEmbedTypes.GIFV,
    S = e.type !== s.MessageTypes.DEFAULT || !h && "" !== e.content,
    I = (0, i.default)(e),
    T = !I && (null == n ? void 0 : n.hasTimestamp) !== !1,
    y = o(e, t),
    M = l(e),
    v = I ? "" : "".concat(c ? M : y, " ").concat(a.MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID);
  if (S) {
    let t = r(e);
    v += " ".concat(t)
  }
  if (A) {
    let t = d(e);
    v += " ".concat(t)
  }
  if (T) {
    let t = u(e);
    v += " ".concat(a.MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID, " ").concat(t)
  }
  return v.trim()
}

function f(e) {
  if (0 === e.reactions.length) return;
  let t = c(e);
  return "".concat(a.MESSAGE_REACTIONS_LABEL_SEGMENT_ID, " ").concat(t)
}