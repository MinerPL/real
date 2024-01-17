"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("702976");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  o = n("193865"),
  u = n("963119"),
  d = n("467475"),
  c = n("256572"),
  f = n("845579"),
  h = n("42203"),
  E = n("27618"),
  m = n("945330"),
  p = n("780571"),
  g = n("304198"),
  S = n("568734"),
  N = n("654017"),
  _ = n("913491"),
  I = n("574073"),
  T = n("359132"),
  C = n("723931"),
  A = n("39331"),
  x = n("68480"),
  v = n("596368"),
  M = n("227439"),
  R = n("862451"),
  L = n("611792"),
  O = n("554372"),
  b = n("49111"),
  y = n("782340"),
  j = n("555821"),
  F = n("877671"),
  D = l.memo(function e(t) {
    var n, l, s;
    let m;
    let {
      channel: g,
      message: j,
      compact: D = !1,
      className: k,
      onContextMenu: P,
      onClick: w,
      disableInteraction: G = !1,
      hasThread: B,
      treatSpam: H
    } = t, V = b.MessageTypesWithLazyLoadedReferences.has(j.type) ? j.messageReference : void 0, Y = (0, r.useStateFromStores)([c.default], () => c.default.getMessageByReference(V)), z = (0, r.useStateFromStores)([h.default], () => j.type === b.MessageTypes.THREAD_STARTER_MESSAGE && Y.state === c.ReferencedMessageState.LOADED ? h.default.getChannel(Y.message.channel_id) : null), K = f.InlineAttachmentMedia.useSetting(), Q = f.InlineEmbedMedia.useSetting(), W = f.RenderEmbeds.useSetting(), X = f.GifAutoPlay.useSetting(), Z = (0, o.useShowImprovedMarkdownUserExperimentConfig)((null !== (n = j.editedTimestamp) && void 0 !== n ? n : j.timestamp).valueOf()), q = (0, o.useShowImprovedMarkdownGuildExperimentConfig)(null !== (l = null == g ? void 0 : g.guild_id) && void 0 !== l ? l : "", (null !== (s = j.editedTimestamp) && void 0 !== s ? s : j.timestamp).valueOf()), J = (0, d.default)(null == g ? void 0 : g.id), {
      disableReactionCreates: $
    } = (0, T.default)(g), {
      content: ee,
      hasSpoilerEmbeds: et
    } = (0, A.default)(j, {
      hideSimpleEmbedContent: Q && W,
      allowList: Z.showListsAndHeaders || q.showListsAndHeaders,
      allowHeading: Z.showListsAndHeaders || q.showListsAndHeaders,
      allowLinks: Z.showMaskedLinks || q.showMaskedLinks,
      previewLinkTarget: Z.showMaskedLinks || q.showMaskedLinks
    }), en = (0, I.default)(j), ea = (0, r.useStateFromStores)([h.default], () => j.hasFlag(b.MessageFlags.HAS_THREAD) && h.default.getChannel(j.id)), el = j.type === b.MessageTypes.THREAD_STARTER_MESSAGE && Y.state === c.ReferencedMessageState.LOADED && null != z, es = !el && void 0 === m, ei = (0, x.default)({
      message: j,
      channel: g,
      enabled: es
    }), er = (0, u.useShouldRedactExplicitContent)(g.id, j.author.id);
    return el ? (0, a.jsx)(e, {
      ...t,
      message: Y.message,
      channel: z,
      hasThread: !1
    }) : (E.default.isBlocked(j.author.id) ? m = y.default.Messages.BLOCKED_MESSAGE_COUNT : (0, N.isSpam)(j) && H && (m = y.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT), void 0 !== m) ? (0, a.jsx)(U, {
      className: k,
      compact: D,
      count: 1,
      collapsedReason: m
    }) : (0, a.jsx)(p.default, {
      compact: D,
      className: i(k, {
        [F.ephemeral]: (0, S.hasFlag)(j.flags, b.MessageFlags.EPHEMERAL),
        [F.disableInteraction]: G,
        [F.groupStart]: t.isGroupStart
      }),
      childrenRepliedMessage: (0, O.default)(j, g, V, Y, D),
      childrenHeader: (0, M.default)({
        ...t,
        author: en,
        guildId: g.guild_id
      }),
      childrenAccessories: (0, a.jsx)(C.MessageAccessories, {
        channel: g,
        message: j,
        hasSpoilerEmbeds: et,
        compact: D,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        disableReactionReads: !1,
        disableReactionCreates: $,
        disableReactionUpdates: !1,
        renderThreadAccessory: B,
        renderComponentAccessory: !1,
        inlineAttachmentMedia: K,
        inlineEmbedMedia: Q,
        renderEmbeds: W,
        gifAutoPlay: X,
        showListsAndHeaders: Z.showListsAndHeaders || q.showListsAndHeaders,
        showMaskedLinks: Z.showMaskedLinks || q.showMaskedLinks,
        shouldHideMediaOptions: J,
        shouldRedactExplicitContent: er
      }),
      childrenExecutedCommand: (0, L.default)(j, g, D),
      childrenMessageContent: (0, v.default)(t, ee),
      childrenSystemMessage: (0, R.default)(t),
      onContextMenu: P,
      onClick: w,
      hasThread: !1 !== B && null != ea && j.hasFlag(b.MessageFlags.HAS_THREAD),
      hasReply: j.type === b.MessageTypes.REPLY,
      isSystemMessage: (0, _.default)(j),
      messageRef: ei
    })
  });

function U(e) {
  let {
    className: t,
    count: n,
    compact: l,
    collapsedReason: s
  } = e;
  return (0, a.jsx)(p.default, {
    className: t,
    compact: l,
    role: "group",
    childrenMessageContent: (0, a.jsx)(g.default, {
      compact: l,
      className: j.blockedSystemMessage,
      iconNode: (0, a.jsx)(m.default, {
        className: j.blockedIcon
      }),
      children: (0, a.jsx)("div", {
        className: j.blockedMessageText,
        children: s.format({
          count: n
        })
      })
    })
  })
}