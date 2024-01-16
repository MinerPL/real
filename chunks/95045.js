"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  },
  renderAutomodMessageMarkup: function() {
    return u
  }
}), n("222007"), n("781738"), n("355025");
var i = n("367376"),
  r = n("240873"),
  l = n("49111");
let a = new Set([l.MessageEmbedTypes.IMAGE, l.MessageEmbedTypes.GIFV]),
  s = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

function o(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = t.formatInline ? i.default.parseInlineReply : i.default.parse;
  return function(e, t, n) {
    var i, l;
    let {
      toAST: o = !1,
      hideSimpleEmbedContent: u = !0,
      formatInline: f = !1,
      postProcessor: h
    } = n, E = !1;
    let _ = e(t.content, !0, (i = t, l = n, {
      allowLinks: null != i.webhookId || !!l.allowLinks,
      allowEmojiLinks: null != i.webhookId,
      channelId: i.channel_id,
      messageId: i.id,
      mentionChannels: i.mentionChannels,
      isInteracting: !!l.isInteracting,
      formatInline: !!l.formatInline,
      noStyleAndInteraction: !!l.noStyleAndInteraction,
      allowHeading: !!l.allowHeading,
      allowList: !!l.allowList,
      previewLinkTarget: !!l.previewLinkTarget,
      disableAnimatedEmoji: !!l.disableAnimatedEmoji,
      disableAutoBlockNewlines: !0,
      muted: !1
    }), (e, n) => (!Array.isArray(e) && (e = [e]), u && (e = function(e, t) {
      if (1 !== e.length || 1 !== t.length) return e;
      let n = e[0],
        i = t[0];
      return ("link" === n.type || "attachmentLink" === n.type) && a.has(i.type) && (0, r.isEmbedInline)(i) ? [] : e
    }(e, t.embeds)), !f && (e = function(e, t) {
      return t ? d(e) : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = d(e[0].content)), e)
    }(e, n)), E = function(e, t) {
      return t ? c(e) : "paragraph" === e[0].type && e[0].content instanceof Array && c(e[0].content)
    }(e, n), f && (e = function e(t) {
      return t.forEach(t => {
        s.has(t.type) && null != t.content && (Array.isArray(t.content) ? e(t.content) : t.content = t.content.replace(/\n/g, " "))
      }), t
    }(e)), null != h && (e = h(e, n)), e));
    return {
      hasSpoilerEmbeds: E,
      content: _
    }
  }(n, e, t)
}

function u(e, t, n) {
  var r;
  return r = i.default.parseAutoModerationSystemMessage, r(e, !0, {
    allowLinks: !1,
    allowEmojiLinks: !1,
    mentionChannels: [],
    isInteracting: !1,
    formatInline: !1,
    noStyleAndInteraction: !1,
    allowHeading: !1,
    allowList: !1,
    disableAutoBlockNewlines: !0,
    highlightWord: t,
    disableAnimatedEmoji: !1,
    channelId: n,
    muted: !1
  }, e => (!Array.isArray(e) && (e = [e]), e))
}

function d(e) {
  let t = e.some(e => "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim()) && !0);
  if (t) return e;
  let n = 0;
  return (e.forEach(e => {
    if (("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (n += 1), n > 30) return !1
  }), n > 30) ? e : (e.forEach(e => {
    e.jumboable = !0
  }), e)
}

function c(e) {
  return e.some(e => "spoiler" === e.type && Array.isArray(e.content) && e.content.some(e => "link" === e.type || "attachmentLink" === e.type))
}