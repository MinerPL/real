"use strict";
l.r(t), l.d(t, {
  default: function() {
    return M
  }
}), l("222007");
var a = l("917351"),
  n = l.n(a),
  r = l("933805"),
  i = l("52140"),
  u = l("888198"),
  s = l("788554");
let o = null;

function d(e, t) {
  let l = {};
  return null != e.mention && null != o && (l = {
    mention: o
  }), (0, s.default)([e, ...t, l])
}
o = l("236180").default;
let c = {
    enableBuildOverrides: !1,
    enableEmojiClick: !0
  },
  f = d(u.default.RULES, [(0, i.default)({
    enableBuildOverrides: !0
  })]),
  m = n.omit(d(u.default.RULES, [(0, i.default)(c)]), "paragraph", "newline"),
  h = d(u.default.CHANNEL_TOPIC_RULES, [(0, i.default)({
    ...c,
    emojiTooltipPosition: "bottom"
  }), {
    codeBlock: {
      react: u.default.RULES.text.react
    }
  }]),
  p = d(u.default.VOICE_CHANNEL_STATUS_RULES, [(0, i.default)({
    ...c,
    enableEmojiClick: !1
  })]),
  E = d(u.default.EMBED_TITLE_RULES, [(0, i.default)(c)]),
  v = d(u.default.INLINE_REPLY_RULES, [(0, i.default)(c)]),
  _ = d(u.default.GUILD_VERIFICATION_FORM_RULES, [(0, i.default)(c)]),
  x = d(u.default.GUILD_EVENT_RULES, [(0, i.default)(c)]),
  I = d(u.default.INLINE_REPLY_RULES, [(0, i.default)({
    ...c,
    emoji: {
      height: 14,
      width: 14,
      lineHeight: 18
    }
  })]),
  S = d(u.default.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, i.default)(c)]),
  g = n.omit(d(u.default.RULES, [(0, i.default)({
    ...c,
    emoji: {
      height: 14,
      width: 14
    }
  })]), "paragraph", "newline", "strong", "codeBlock", "inlineCode", "u", "link", "url", "autolink", "list", "heading"),
  L = n.omit(u.default.RULES, "paragraph", "newline", "strong", "codeBlock", "inlineCode", "u", "link", "url", "autolink", "list", "heading", "roleMention", "channelMention");
var M = {
  combineAndInjectMentionRule: d,
  createReactRules: i.default,
  defaultReactRuleOptions: c,
  defaultRules: f,
  guildEventRules: x,
  notifCenterV2MessagePreviewRules: g,
  lockscreenWidgetMessageRules: L,
  astParserFor: r.astParserFor,
  reactParserFor: r.reactParserFor,
  parse: r.reactParserFor(f),
  parseTopic: r.reactParserFor(h),
  parseVoiceChannelStatus: r.reactParserFor(p),
  parseEmbedTitle: r.reactParserFor(E),
  parseInlineReply: r.reactParserFor(v),
  parseGuildVerificationFormRule: r.reactParserFor(_),
  parseGuildEventDescription: r.reactParserFor(x),
  parseAutoModerationSystemMessage: r.reactParserFor(S),
  parseForumPostGuidelines: r.reactParserFor(m),
  parseForumPostMostRecentMessage: r.reactParserFor(I),
  parseNotifCenterMessagePreview: r.reactParserFor(g),
  parseToAST: r.astParserFor(f),
  parseTopicToAST: r.astParserFor(h),
  parseEmbedTitleToAST: r.astParserFor(E),
  parseInlineReplyToAST: r.astParserFor(v),
  parseAutoModerationSystemMessageToAST: r.astParserFor(S)
}