"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("702976");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  o = n("193865"),
  u = n("963119"),
  d = n("467475"),
  c = n("256572"),
  f = n("845579"),
  E = n("42203"),
  h = n("27618"),
  _ = n("945330"),
  S = n("780571"),
  T = n("304198"),
  p = n("568734"),
  N = n("654017"),
  I = n("913491"),
  m = n("574073"),
  g = n("359132"),
  A = n("723931"),
  C = n("39331"),
  R = n("68480"),
  M = n("596368"),
  O = n("227439"),
  L = n("862451"),
  v = n("611792"),
  D = n("554372"),
  y = n("49111"),
  x = n("782340"),
  P = n("555821"),
  U = n("877671"),
  b = a.memo(function e(t) {
    var n, a, s;
    let _;
    let {
      channel: T,
      message: P,
      compact: b = !1,
      className: j,
      onContextMenu: G,
      onClick: k,
      disableInteraction: w = !1,
      hasThread: B,
      treatSpam: H
    } = t, V = y.MessageTypesWithLazyLoadedReferences.has(P.type) ? P.messageReference : void 0, Y = (0, r.useStateFromStores)([c.default], () => c.default.getMessageByReference(V)), K = (0, r.useStateFromStores)([E.default], () => P.type === y.MessageTypes.THREAD_STARTER_MESSAGE && Y.state === c.ReferencedMessageState.LOADED ? E.default.getChannel(Y.message.channel_id) : null), Q = f.InlineAttachmentMedia.useSetting(), z = f.InlineEmbedMedia.useSetting(), W = f.RenderEmbeds.useSetting(), q = f.GifAutoPlay.useSetting(), X = (0, o.useShowImprovedMarkdownUserExperimentConfig)((null !== (n = P.editedTimestamp) && void 0 !== n ? n : P.timestamp).valueOf()), Z = (0, o.useShowImprovedMarkdownGuildExperimentConfig)(null !== (a = null == T ? void 0 : T.guild_id) && void 0 !== a ? a : "", (null !== (s = P.editedTimestamp) && void 0 !== s ? s : P.timestamp).valueOf()), J = (0, d.default)(null == T ? void 0 : T.id), {
      disableReactionCreates: $
    } = (0, g.default)(T), {
      content: ee,
      hasSpoilerEmbeds: et
    } = (0, C.default)(P, {
      hideSimpleEmbedContent: z && W,
      allowList: X.showListsAndHeaders || Z.showListsAndHeaders,
      allowHeading: X.showListsAndHeaders || Z.showListsAndHeaders,
      allowLinks: X.showMaskedLinks || Z.showMaskedLinks,
      previewLinkTarget: X.showMaskedLinks || Z.showMaskedLinks
    }), en = (0, m.default)(P), el = (0, r.useStateFromStores)([E.default], () => P.hasFlag(y.MessageFlags.HAS_THREAD) && E.default.getChannel(P.id)), ea = P.type === y.MessageTypes.THREAD_STARTER_MESSAGE && Y.state === c.ReferencedMessageState.LOADED && null != K, es = !ea && void 0 === _, ei = (0, R.default)({
      message: P,
      channel: T,
      enabled: es
    }), er = (0, u.useShouldRedactExplicitContent)(T.id, P.author.id);
    return ea ? (0, l.jsx)(e, {
      ...t,
      message: Y.message,
      channel: K,
      hasThread: !1
    }) : (h.default.isBlocked(P.author.id) ? _ = x.default.Messages.BLOCKED_MESSAGE_COUNT : (0, N.isSpam)(P) && H && (_ = x.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT), void 0 !== _) ? (0, l.jsx)(F, {
      className: j,
      compact: b,
      count: 1,
      collapsedReason: _
    }) : (0, l.jsx)(S.default, {
      compact: b,
      className: i(j, {
        [U.ephemeral]: (0, p.hasFlag)(P.flags, y.MessageFlags.EPHEMERAL),
        [U.disableInteraction]: w,
        [U.groupStart]: t.isGroupStart
      }),
      childrenRepliedMessage: (0, D.default)(P, T, V, Y, b),
      childrenHeader: (0, O.default)({
        ...t,
        author: en,
        guildId: T.guild_id
      }),
      childrenAccessories: (0, l.jsx)(A.MessageAccessories, {
        channel: T,
        message: P,
        hasSpoilerEmbeds: et,
        compact: b,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        disableReactionReads: !1,
        disableReactionCreates: $,
        disableReactionUpdates: !1,
        renderThreadAccessory: B,
        renderComponentAccessory: !1,
        inlineAttachmentMedia: Q,
        inlineEmbedMedia: z,
        renderEmbeds: W,
        gifAutoPlay: q,
        showListsAndHeaders: X.showListsAndHeaders || Z.showListsAndHeaders,
        showMaskedLinks: X.showMaskedLinks || Z.showMaskedLinks,
        shouldHideMediaOptions: J,
        shouldRedactExplicitContent: er
      }),
      childrenExecutedCommand: (0, v.default)(P, T, b),
      childrenMessageContent: (0, M.default)(t, ee),
      childrenSystemMessage: (0, L.default)(t),
      onContextMenu: G,
      onClick: k,
      hasThread: !1 !== B && null != el && P.hasFlag(y.MessageFlags.HAS_THREAD),
      hasReply: P.type === y.MessageTypes.REPLY,
      isSystemMessage: (0, I.default)(P),
      messageRef: ei
    })
  });

function F(e) {
  let {
    className: t,
    count: n,
    compact: a,
    collapsedReason: s
  } = e;
  return (0, l.jsx)(S.default, {
    className: t,
    compact: a,
    role: "group",
    childrenMessageContent: (0, l.jsx)(T.default, {
      compact: a,
      className: P.blockedSystemMessage,
      iconNode: (0, l.jsx)(_.default, {
        className: P.blockedIcon
      }),
      children: (0, l.jsx)("div", {
        className: P.blockedMessageText,
        children: s.format({
          count: n
        })
      })
    })
  })
}